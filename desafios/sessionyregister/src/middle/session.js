import expressSession from 'express-session'

/* ------------------------------------------------*/
/*           Persistencia por MongoDB              */
/* ------------------------------------------------*/
import MongoStore from 'connect-mongo'
const mongoUrl = 'mongodb+srv://aguborio18:321654@cluster0.u12lxve.mongodb.net/?retryWrites=true&w=majority'
const store = MongoStore.create({ mongoUrl, ttl: 15 })
/* ------------------------------------------------*/

const session = expressSession({
    store,
    secret: 'blabla',
    resave: false,
    saveUninitialized: false
})

export default session