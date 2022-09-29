import Texto from "../src/texto.js";

const texto = new Texto("jlkjll")
const result = texto.obtenerFormateado()

if(result ==! " ") throw new Error("error string vacio")