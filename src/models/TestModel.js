'use strict';



class TestModel{
    constructor(){
        this.id = 0;
        this.createdAt = new Date();
        this.db = []
    }


    create(obj){
        let record = {
            id: this.id++,
            createdAt: this.createdAt,
            title: obj.title,
            author: obj.author,
        }
        // this.state.bookDB.push(record)
        this.db.push(record)
        return record
    }

    read(id){
        if (id) {
            return this.db.find(record => record.id === id)
        } else {
            return this.db;
        }
    }

    update(id, obj){
        this.db[id] = {...this.db[id], title: obj.title, author: obj.author}
        return obj
      
    }

    delete(id){
        console.log("THis is deleted", id , this.db)
        this.db[id] = {}
        return null
        }
  
    }



module.exports = TestModel
