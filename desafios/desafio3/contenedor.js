const fs = require("fs");


class Contenedor{
    static newId=0;
    constructor(ruta){
        this.ruta=ruta;
    }

    async save(ruta){
        let obj = await this.getAll();
        if(obj.length == 0){
            Contenedor.newId=1;
        }else{
            Contenedor.newId++;
        }
        ruta={id:Contenedor.newId,...ruta}

        let datos = [...obj,ruta]
        try {
           await fs.writeFileSync(this.ruta,JSON.stringify(datos,null,2))
        } catch (error) {
           return error 
        }
    }


    async getById(id){
        let objs = await this.getAll();
        let obj = objs.filter(o=>o.id == id)
        if (obj.length ==0){
            return `No se puede obtener producto: ${id}`
        }else{
            return obj
        }
    }

    async getAll(){
        try{
            const obj = await fs.readFileSync(this.ruta)
            return JSON.parse(obj)
        }catch(error){
            return []
        }
    }

    async deleteById(id){
        let objs = await this.getAll();
        let obj = objs.filter(o=>o.id != id)
        try {
            return obj
        } catch (error) {
            return `no es posible`
        }
    }

    async deleteAll(){
        try {
            await fs.writeFileSync(this.ruta, JSON.stringify([],null,2))
        } catch (error) {
            return `no se pueden borrar`  
        }
    }
}

let as = new Contenedor(`./productos.txt`)
as.save({title:"Mayonesa",
price:"200$",
foto: "foto1"})

as.getAll()
.then((data)=>console.log(data))
.catch((err=>console.log(err)))

as.deleteById(1)
.then((data)=>console.log(data))
.catch((err=>console.log(err)))

as.deleteAll()
.then((data)=>console.log(data))
.catch((err=>console.log(err)))

as.getById(2)
.then((data)=>console.log(data))
.catch((err=>console.log(err)))

