# pokemon-challenge
Shakespearify Pokemon descriptions or flavor texts with this API

### GET `/pokemon/{name}`
`200` - Success

`404` - Validation error

`429` -  API calls maxed out per hour error


## Usage
### Spin up API
`docker build . -t {username}/server.js`

`docker run -p 5000:5000 {username}/server.js}`

### Retrieve shakespearified pokemon flavor text
```
curl -X GET \
  http://localhost:5000/pokemon/{name}\
  -H 'Content-Type: application/json'
```