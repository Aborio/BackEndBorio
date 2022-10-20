import passport from 'passport'

import { obtenerUsuarioPorId } from '../persistencia/usuarios.js'
import * as strategies from './passportStrategies.js'

passport.use('registro', strategies.registroLocal)
passport.use('login', strategies.loginLocal)

export const passportMiddleware = passport.initialize()