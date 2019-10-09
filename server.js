import express from 'express'
import bodyParser from 'body-parser'
import { router } from './routes/pokemon'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

app.use(router)

app.use(function(req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

app.listen(port)
console.log('Running on port ' + port)
