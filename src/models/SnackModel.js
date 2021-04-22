'use strict';

const DaddyModel = require('./GenericModel.js')

class SnackModel extends DaddyModel {

    constructor(props){
        super(props)
        this.state = {
            snackDB: [],
        }
    }

    create(obj){
        let record = {
            id: ++this.props.id,
            createdAt: this.props.createdAt,
            title: obj.title,
            author: obj.author,
        }
        this.setState({snackDB: [...this.state.snackDB, record]})
        return record
    }

    read(id){
        if (id) {
            return this.state.snackDB.find(record => record.id === id)
        } else {
            return this.state.snackDB;
        }
    }

    update(id, obj){
        if (id) {
        let updated = this.state.snackDB.filter(el => {
                if (el.id === id ){
                    return obj
                }
                return el
            })
            this.setState({snackDB: updated})
            return "UPDATED"
        }
    }

    delete(id){
        if (id) {
            let updated = this.state.snackDB.filter(el => {
                if (el.id !== id ){
                    return el
                }
            })
            this.setState({snackDB: updated})
            return "DELETED"
        }
    }
    

}

module.exports = SnackModel