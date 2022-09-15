import { knexConfig } from './knexconfig.js'
import crearKnex from 'knex'

export const clienteSql = crearKnex(knexConfig)

import { knexConfigsq } from './knexconfig.js'
import crearKnexsq from 'knex'

export const clienteSqlsq = crearKnexsq(knexConfigsq)