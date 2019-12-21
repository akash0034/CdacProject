const db = require('./db')
const utils = require('./utils')
const express = require('express')


const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect(

)
    const statement = `select * from  Servises`
    connection.query(statement, (error, data) => {
        connection.end()
      
        response.send(utils.createResult(error, data))
    })
})




router.put('/:Service_id', (request, response) => {
    const {Service_id} = request.params
    const { Services_Name } = request.body
    const connection = db.connect()
    const statement = `update Servises set Services_Name ='${Services_Name}' where Service_id = ${Service_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:Service_id', (request, response) => {
    const { Service_id } = request.params
    const connection = db.connect()
    const statement = `delete from Servises where Service_id = ${Service_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/add', (request, response) => {
    const {Services_Name} = request.body

       
        //const Crop_Img = request.file.filename
    const connection = db.connect()

    const statement1 = `select * from Servises where Services_Name = '${Services_Name}'`
    connection.query(statement1, (error, RegDetails) => {

        if (RegDetails.length == 0) {
            // user with the required email does not exist
            console.log(error);
            // insert a new record
            console.log(Services_Name);
            
            const statement = `insert into Servises (Services_Name) 
            values ('${Services_Name}')`

            connection.query(statement, (error, data) => {
                connection.end()
                response.send(utils.createResult(error, data))
                console.log(data)

            })
        } else {
            // user with email already exists
            connection.end()
            response.send(utils.createResult('Crop Type Alrady Exist.'))
        }


    })


})

module.exports = router
