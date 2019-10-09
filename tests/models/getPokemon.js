import test from 'ava'
import sinon from 'sinon'
import { getPokemonRequest } from '../../app/models/getPokemon'
import * as shakespearify from '../../app/models/shakespearify'
import request from 'request-promise-native'

test.beforeEach((t) => {
  t.context.sandbox = sinon.createSandbox()
})

test.afterEach.always((t) => {
  t.context.sandbox.restore()
})

test(`success getPokemonRequest`, async (t) => {
    const name = 'pikachu'
    const description = 'meowth'
    const expected = {
      name,
      description
    }

    const sb = t.context.sandbox
    const response = {
        contents: {
          translated: description
        }
      }
    const pokemon = {
      flavor_text_entries:[
        {
          flavor_text:'meow',
          language: {
            name: 'en'
          }
        }
      ]
    }
    sb.stub(shakespearify, 'makeShakespeareRequest').resolves(response)
    sb.stub(request, 'get').resolves(pokemon)
    
    const result = await getPokemonRequest(name)

    t.deepEqual(result, expected)
})