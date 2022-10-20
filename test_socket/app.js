import {Server} from "socket.io"
import {create} from "express-handlebars"
import session from 'express-session'
//socket
import {createServer} from "http"
import dotenv from "dotenv"
import express from "express"
import formatoMensaje from "./utils/formatoMensaje.js"
import msgDB from "./models/modelMensajeA.js"
import normalizeMsgs from "./utils/normalizeMsg.js"
import path from "path"
const app = express()
const __dirname = path.dirname(new URL(import.meta.url).pathname)
dotenv.config()







/* ------------------------------------------------*/
/*           Persistencia por MongoDB              */
import MongoStore from 'connect-mongo'
const mongoUrl = 'mongodb+srv://aguborio18:321654@cluster0.u12lxve.mongodb.net/?retryWrites=true&w=majority'
const store = MongoStore.create({ mongoUrl, ttl: 300 })
app.use(session({
   store,
   secret: 'shhhhhhhhhhhhhhhhhhhhh',
   resave: false,
   saveUninitialized: false
}))


/* ------------------------------------------------*/





const httpServer = createServer(app)
const io = new Server(httpServer)
//handlebars
const hbs = create({
   extname: ".hbs", //extension
   defaultLayout: "main",
   layoutsDir: path.join(app.get("views"), "layouts"),
   partialsDir: path.join(app.get("views"), "partials"),
})

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
app.set("views", "./views")
app.use(express.static("./public"))

app.get("/", (req, res) => {
   res.render("index", {title: "Entrega 22 - MOCKS Y NORMALIZR"})
})







io.on("connection", async (socket) => {
   console.log("se conecto usuario")

   const data = normalizeMsgs(await msgDB.readData())
   socket.emit("mensajes", data)

   socket.on("chatMessage", async (msg) => {
      const mensaje = formatoMensaje(msg)
      await msgDB.newMensaje(mensaje)
      io.sockets.emit("mensajes", await normalizeMsgs(msgDB.readData()))
   })
   socket.on("typing", (data) => {
      //console.log(data)
      socket.broadcast.emit("typing", data)
   })
   socket.on("disconnect", () => {
      console.log("se desconecto usuario")
   })
})
httpServer.listen(process.env.PORT, () => {
   console.log("server cuchando : ", process.env.PORT)
})
