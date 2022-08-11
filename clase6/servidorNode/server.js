const http = require (`http`)
const today = new Date().getHours;
const now = today.toLocaleString()


const server = http.createServer((request, response)=>{
    if(today >= 6 && today <= 12){response.end(`Buenos Dias`);}
    else if(today >= 13 && today <= 19){response.end(`Buenas tardes`)}
    else if(today >= 20 && today <= 23 || today >= 0 && today <= 5){response.end(`Buenas noches`)}
    
})

const PORT = 3001

const connectedServer = server.listen(PORT, ()=>{
    console.log(`servdor escuchando por el puerto ${PORT}`)
})