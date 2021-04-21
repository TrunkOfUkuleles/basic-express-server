'use strict';

const DaddyModel = require('./GenericModel.js')

class BookModel extends DaddyModel {
    constructor(props){
        super(props);
        this.bookDB = [],
    }

    create(obj){
        let record = {
            id: ++this.props.id,
            createdAt: this.props.createdAt,
            title: obj.title,
            author: obj.author,
        }
        this.bookDB.push(record)
        return record
    }

    read(id){
        if (id) {
            return this.bookDB.find(record => record.id === id)
        } else {
            return this.bookDB;
        }
    }

    update(id, obj){
        if (id) {
            this.bookDB = this.bookDB.filter(el => {
                if (el.id === id ){
                    return obj
                }
                return el
            })
            return "Updated"
        }

    }

    delete(id){
        if (id) {
            this.bookDB = this.bookDB.filter(el => {
                if (el.id !== id ){
                    return el
                }
            })
            return "DELETED"
        }
    }
    

}

module.exports = BookModel