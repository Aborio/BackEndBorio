import {promises as fs} from "fs"


class ContenedorMemoria {

    constructor(elementos) {
        this.elementos = elementos
    }

    async listar() {
        try{
            const data = await fs.readFile(this.elementos)
            const mensajes = JSON.parse(data)
            return mensajes
        }catch (error){}
    }

    async listarID(id) {
       const data = await this.readData()
       const find = data.find((p)=>p.id == id)
       return find
    }

    async newMje(mensaje) {
        const mensajes = await this.readData()
        mensaje.push(mensaje)

        await this.writeFile(mensajes)
        return mensajes
    }

    async writeFile(data, log) {
        try{
            const content = await fs.writeFile(this.ruta, JSON.stringify(data,null,2))
            console.log(log ? log : "guardado")
        }catch (error) {
            console.log("error", error)
        }
    }

    async borrarID(id) {
        const data = await this.readData()
        const find = data.find((p)=>p.id == id)
        return find.splice(find, 1)
    }

    borrarAll() {
        this.elementos = []
    }
}

export default ContenedorMemoria