import request from 'request-promise-native'
import { makeShakespeareRequest } from './shakespearify'

export const getPokemonRequest = async name => {
    const api = `https://pokeapi.co/api/v2/pokemon-species/${name}/`
    const body = { name }
    const options = {
        uri: api,
        body,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    }

    const result = await request.get(options)
    const { contents: { translated: description }} = await getFlavorText(result)
    const response = {
        name,
        description
    }
    return response
}

const getFlavorText = body => {
    const entriesInEnglish = body.flavor_text_entries
    const entry = entriesInEnglish
    .map((entriesInEnglish) => {
        const { flavor_text, language} = entriesInEnglish
        return {
            flavor_text,
            language
        }
    })
    .filter(entry => {
        return entry.language.name === 'en'
    })
    const text = entry[0].flavor_text
    return makeShakespeareRequest(text)
}