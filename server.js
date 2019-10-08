import * as express from 'express'
import bodyParser from 'body-parser'
import { router as pokemonRouter } from './routes/pokemon'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

express.router.get('/pokemon/:pokemon', function(req, res) {
    res.json({ message: `Shakespearean pokemon flavor text: ${res}`})
})

app.use(function(req, res) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.use(pokemonRouter)

app.listen(port)
console.log('Magic happens on port ' + port)
