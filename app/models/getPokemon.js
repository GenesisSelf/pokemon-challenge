import request from 'request'
import { makeShakespeareRequest } from './shakespearify'

export const getPokemonRequest = async(name) => {
    const api = `https://pokeapi.co/api/v2/pokemon-species/${name}/`
    const body = JSON.stringify({ name })
    const options = {
        uri: api,
        body,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    request(options, (err, res, body) => {
        return getFlavorText(body)
    })
}

const getFlavorText = async (body) => {
    const data = JSON.parse(body)
    const entriesInEnglish = data.flavor_text_entries
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
    return await makeShakespeareRequest(text)
}