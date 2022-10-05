const socket = io.connect();
const render=(data)=>{
    const html = data.messages.map((elem,index)=>{
        return(
            `<div>
            <strong class="text-primary">${elem.author}</strong>:
            <span class="text-danger">[${elem.date}]<span>
            <em class="text-success">${elem.text}</em>
            </div>`)
    }).join(" ")
    document.getElementById("messages").innerHTML=html;
    const ps = data.products.map((p)=>{
        return(`<tr>
            <th>${p.title}</th>
            <td>${p.price}</td>
            <td>
              <div>
                <img class="w-50" src=${p.thumbnail} alt='Product image' />
              </div>
            </td>
          </tr>`)
    }).join(" ")
    document.getElementById("tbdy").innerHTML=ps
}

const addMessage=(e)=>{
    let fecha = new Date().toLocaleDateString()+ ' ' +new Date().toTimeString()
    let fyh = fecha.split(' ');
    const mensaje = {
        author:{
            email:document.getElementById('email').value,
            nombre:document.getElementById('nombre').value,
            apellido:document.getElementById('apellido').value,
            edad:document.getElementById('edad').value,
            alias:document.getElementById('alias').value,
            avatar:document.getElementById('avatar').value
        },
        text:document.getElementById('texto').value,
        date:fyh[0]+' '+fyh[1]
    }

    socket.emit('new-message',mensaje);
    limpiarInput()
    return false;
}

socket.on('messages',(data)=>{render(data)})