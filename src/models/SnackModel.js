'use strict';

const DaddyModel = require('./GenericModel.js')

class SnackModel extends DaddyModel {
    constructor(props){
        super(props);
        this.snackDB = [],
    }

    create(obj){
        let record = {
            id: ++this.props.id,
            createdAt: this.props.createdAt,
            title: obj.title,
            author: obj.author,
        }
        this.snackDB.push(record)
        return record
    }

    read(id){
        if (id) {
            return this.snackDB.find(record => record.id === id)
        } else {
            return this.snackDB;
        }
    }

    update(id, obj){
        if (id) {
            this.snackDB = this.snackDB.filter(el => {
                if (el.id === id ){
                    return obj
                }
                return el
            })
            
        }
    }

    delete(id){
        if (id) {
            this.snackDB = this.snackDB.filter(el => {
                if (el.id !== id ){
                    return el
                }
            })
        }
    }
    

}

module.exports = SnackModel