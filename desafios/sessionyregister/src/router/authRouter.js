import { Router } from 'express'

import {
    failLoginController,
    failRegisterController,
    registroController, loginController, logoutController
} from '../controladores/authController.js'

export const authRouter = new Router()

// registro
authRouter.post('/register', registroController)
authRouter.post('/failRegister', failRegisterController)

// login
authRouter.post('/login', loginController)
authRouter.post('/failLogin', failLoginController)

// logout
authRouter.get('/logout', logoutController)