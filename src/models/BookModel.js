'use strict';



const DaddyModel = require('./GenericModel.js')

class BookModel extends DaddyModel {
    constructor(props){
        super(props)
        this.state = {
        bookDB: [],
        }
    }

    create(obj){
        let record = {
            id: ++this.props.id,
            createdAt: this.props.createdAt,
            title: obj.title,
            author: obj.author,
        }
        // this.state.bookDB.push(record)
        this.setState({bookDB: [...this.state.bookDB, record]})
        return record
    }

    read(id){
        if (id) {
            return this.state.bookDB.find(record => record.id === id)
        } else {
            return this.state.bookDB;
        }
    }

    update(id, obj){
        if (id) {
            let newDB = this.state.bookDB.filter(el => {
                if (el.id === id ){
                    return obj
                }
                return el
            })
            this.setState({bookDB: newDB  })
            return "Updated"
        }
        return null;
    }

    delete(id){
        if (id) {
            let lesserDB = this.state.bookDB.filter(el => {
                if (el.id !== id ){
                    return el
                }
            })
            this.setState({bookDB: lesserDB})
            return "DELETED"
        }
        return null;
    }
    

}

module.exports = BookModel;