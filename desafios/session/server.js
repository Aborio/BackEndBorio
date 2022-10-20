import express from 'express'
import session from 'express-session'

/* ------------------------------------------------*/
/*           Persistencia por MongoDB              */
/* ------------------------------------------------*/
import MongoStore from 'connect-mongo'
const mongoUrl = 'mongodb+srv://aguborio18:321654@cluster0.u12lxve.mongodb.net/?retryWrites=true&w=majority'
const store = MongoStore.create({ mongoUrl, ttl: 15 })
/* ------------------------------------------------*/

const app = express()

app.use(session({
    store,
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    res.send('Servidor express ok!')
})

app.get('/login', (req, res) => {
    const { username, password } = req.body

    if (username !== 'pepe' || password !== 'pepepass') {
      return res.send('login failed')
    }
  
    req.session.user = username
    req.session.admin = true
    res.send('login success!')
    }
)

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout ok!')
        else res.send({ status: 'Logout ERROR', body: err })
    })
})



const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})