import {promises as fs} from "fs"

class ContenedorArchivo {
   constructor(ruta) {
      this.ruta = ruta
   }
   async readData() {
      try {
         const data = await fs.readFile(this.ruta)
         const mensajes = JSON.parse(data)
         return mensajes
      } catch (error) {}
   }
   async readID(id) {
      const data = await this.readData()
      const find = data.find((p) => p.id == id)
      return find
   }
   async newMensaje(mensaje) {
      const mensajes = await this.readData()
      mensajes.push(mensaje)

      await this.writeFile(mensajes)
      return mensajes
   }

   async writeFile(data, log) {
      try {
         const content = await fs.writeFile(this.ruta, JSON.stringify(data, null, 2))
         console.log(log ? log : "Guardado con Exito")

         return content
      } catch (error) {
         console.log("Error de escritura!", error)
      }
   }
}

export default ContenedorArchivo
