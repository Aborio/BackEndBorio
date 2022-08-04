class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [{}];
        this.mascotas = []
    }

    getFullName = () =>{
        return `${this.nombre} ${this.apellido}`
    }

    addMascota = (name) =>{
        this.mascotas.push(name)
    }

    countMascotas = () =>{
        return this.mascotas.length
    }

    addBook = (nombre,autor) =>{
        this.libros.push({nombre,autor})
        
    }

    getBookName = () => {
        return this.libros
    }
}

let user1 = new Usuario("Agustin","Borio","señor de los anillos")
console.log(user1.addMascota("firulais"))
console.log(user1.countMascotas())
console.log(user1.addBook("don","satur"))
console.log(user1.getBookName())
console.log(user1.getFullName())


