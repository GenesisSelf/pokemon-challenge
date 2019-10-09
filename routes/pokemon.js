import { Router } from 'express'
import { getPokemonRequest } from './../app/models/getPokemon'
import Joi from '@hapi/joi'

const router = Router()

const schema = Joi.object().keys({
  name: Joi.string().required(),
})

router.get('/pokemon/:name', async (req, res) => {
  const name = req.params.name
  if (!name) { return res.sendStatus(404) }

  const { error } = schema.validate({name})
  if (error) {
    return res.status(404).json(error)
  }
    const result = await getPokemonRequest(name)

    return res.json(result)
})
  
export { router }
