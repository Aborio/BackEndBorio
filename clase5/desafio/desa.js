let numeros = {}
const mostrarNumeros = () =>{
    return Math.floor(Math.random(0)*20)
}

for (let i = 0 ; i < 10000 ; i++){
    
    console.log(mostrarNumeros())
}