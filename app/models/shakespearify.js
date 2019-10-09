import request from 'request-promise-native'

export const makeShakespeareRequest = text => {
    const api = 'https://api.funtranslations.com/translate/shakespeare.json'
    const body = { text }
    const options = {
        uri: api,
        body,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    }

    return request(options)
}