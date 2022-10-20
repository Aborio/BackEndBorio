export function crearUsuario({ id , username, password, direccion }) {
    if (!username) {
        throw crearErrorDatos('falta el campo obligatorio "username"')
    }

    if (!password) {
        throw crearErrorDatos('falta el campo obligatorio "password"')
    }

    const usuario = {
        username : document.getElementById("usuario1"),
        password : document.getElementById("contraseña1"),
    }

    return usuario
}