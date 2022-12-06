import mongoose, { model } from 'mongoose'


class ContenedorMongoDb {
    

    constructor() {
        
        this.data = []
    }

    async getAll () {
        return this.data
    }

    async findById(id){
        const itemIndex = this.data.findIndex(d => d.id === id)
        return this.data[itemIndex]
    }

    async addOne(item){
        this.data.push({
          ...item,
          id: this.count() + 1,
          timestamp: +new Date()
        })
        return item
      }


    async updateById(id,data){
        let updatedItemIndex = this.data.findIndex(d => d.id === id)
        this.data[updatedItemIndex] = { ...this.data[updatedItemIndex], ...data }
        return this.data[updatedItemIndex]
      }

    async deleteOne(id){
        let deletedItem
        this.data = this.data.filter((d) => {
          if (d.id !== id) {
            deletedItem = d
            return true
          }
        })
        return deletedItem
      }

    async deleteAll(){
        return (this.data = [])
      }

    async count(){
        return this.data.length
      }
}

export default ContenedorMongoDb