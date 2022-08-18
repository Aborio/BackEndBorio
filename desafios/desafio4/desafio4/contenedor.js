


class Contenedor{
    newId=0;
    constructor(){
        this.productos=[];
    }


    getById(id){
        let obj = this.productos;
        let miObj = obj.filter(p=>p.id == Number(id))
        return miObj
    }

    getAll(){
        return this.productos;
    }

    deleteById(id){
        let obj = this.productos.filter(p=>p.id != Number(id))
        this.productos=obj
        return obj
    }
    
    
    modificar(id,obj){
        this.productos.forEach(p=>{
            if(p.id==Number(id)){
                p=obj
            }
        })
        return this.productos;
    }
    agregarUno(obj){
        obj.id=this.newId++
        this.productos=[...this.productos,obj]
    }
}


module.exports=Contenedor