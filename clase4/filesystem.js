const fs = require(`fs`)
fs.writeFileSync(`prueba.txt`, `nueva informacion`);

const guardarInfo = (ruta,info) =>{
    // fs.writeFileSync(ruta,info)
    fs.appendFileSync(ruta,info)
}

const mostrarInfo = (ruta,infos) => {
   let info =  fs.readFileSync(ruta,infos)
    console.log(info)
}

guardarInfo(`prueba.txt`, `aguante el celeste`)
mostrarInfo(`prueba.txt`, `utf-8`)
