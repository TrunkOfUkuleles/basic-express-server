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
        console.log("created: ", record)
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
        // let target = this.db.findIndex(record => record.id === id)
        // this.db[target].title =  obj.title
        // this.db[target].authour =  obj.author
        this.db[id] = {...this.db[id], title: obj.title, author: obj.author}
        return obj

      
    }

    delete(id){
        console.log("This is deleted", id , this.db)
        this.db[id] = {}
        return null
        }
  
    }



module.exports = TestModel
