
import admin from 'firebase-admin';
import fs from 'fs'
const rutaCredenciales = './db/newproject-80468-firebase-adminsdk-slmor-716f7d1ac6.json'
const serviceAccount =JSON.parse(await fs.promises.readFile(rutaCredenciales));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const asObj = doc =>({id:doc.id, ...doc.data()})

const db = admin.firestore();
const dbPersonas = db.collection('personas')

const nombre2 = await dbPersonas.add({nombre :'Agustin'})
console.log(nombre2.id)

const doc = await dbPersonas.doc(nombre2.id).get();
console.dir(asObj(doc))

const result = []
const snahpshot = await dbPersonas.get();
snahpshot.forEach(doc =>{
    result.push(asObj(doc))
})
console.dir(result)


//-------updta------///

await dbPersonas.doc(nombre2.id).set({nombre :"carlos"})
console.dir(asObj(await dbPersonas.doc(nombre2.id).get()))


//------delete------///


await dbPersonas.doc(nombre2.id).delete();
