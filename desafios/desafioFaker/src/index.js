const socket = io.connect();


const addMessage=(e)=>{
    e.preventDefault()
    let fecha = new Date().toLocaleDateString()+ ' ' +new Date().toTimeString()
    let fyh = fecha.split(' ');
    const mensaje = {
        author:{
            id:document.getElementById('email').value,
            nombre:document.getElementById('nombre').value,
            apellido:document.getElementById('apellido').value,
            edad:document.getElementById('edad').value,
            alias:document.getElementById('alias').value,
            avatar:document.getElementById('avatar').value
        },
        text:document.getElementById('texto').value,
        date:fyh[0]+' '+fyh[1]
    }

}

socket.on("mensajes", (data) => {
    typing.innerHTML = ""
    const dataSize = JSON.stringify(data).length
    console.log(data, "data")
    const denormData = normalizr.denormalize(data.result, schemaMsgs, data.entities)
    const denormSize = JSON.stringify(denormData).length
    console.log(denormData, "peso", denormSize)
 
    const result = parseInt((denormSize * 100) / dataSize)
    console.log(result)
 
    datosNorm.innerHTML = `
    <h1>Datos normalizados: ${dataSize} </h1>
    <h1>Datos des-normalizados: ${denormSize} </h1>
    <h1>Porcentaje de compresión:${100 - result}% </h1>`
    renderChat(denormData.mensajes)
 })

 socket.on("typing", (data) => {
    typing.innerHTML = `<p class="text-muted m-0 p-0">${data} está escribiendo...</p>`
 })


 const renderChat = (data) => {
    console.log(data)
 
    const html = data
       .map((m) => {
          return `<div class="mensaje">
          <p id="datos" class="opacity-75 badge bg-secondary mb-1">
          <img src=${m.author.avatar} width="20" alt="" />
                        ${m.author.nombre}<span class="mx-3 text-dark badge bg-warning">${m.time}</span>
                              </p>
                              <p class="lead">${m.text}</p>
          </div>`
       })
       .join("")
 
    chatMessages.innerHTML = html
    chatMessages.scrollTop = chatMessages.scrollHeight
 }
 