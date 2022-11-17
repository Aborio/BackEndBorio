import  express  from "express";

const app = express();

app.get("/mensaje", (req,res)=>{
    res.send("Mensajito")
})

const PORT = 8080
app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})