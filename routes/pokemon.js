import router from 'express'
import { getPokemonRequest } from './../app/models/getPokemon'

// TODO validate param

router.get('/pokemon/:pokemon',  function(req, res) {
    if (!name) { return res.sendStatus(404) }
    
    req.name = name
    const result = getPokemonRequest(name)
    return res.status(200).json(result)
  })
  
export { pokemonRouter }
