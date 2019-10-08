import request from 'request'

export const makeShakespeareRequest = async (text) => {
    const api = 'https://api.funtranslations.com/translate/shakespeare.json'
    const body = JSON.stringify({ text })
    const options = {
        uri: api,
        body,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    request(options, (err, res) => {
        console.log(`response: ${JSON.stringify(res)}`)

    })
}