import { faker } from '@faker-js/faker'
faker.locale = 'es'

function generarProducto(id) {
  return {
    id,
    nombre: faker.name.firstName(),
    precio: faker.finance.amount(),
    image: faker.image.business(),
  }
}

export { generarProducto }