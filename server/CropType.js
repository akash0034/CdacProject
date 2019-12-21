const db = require('./db')
const utils = require('./utils')
const express = require('express')


const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect(

    )
    const statement = `select * from  CropType`
    connection.query(statement, (error, data) => {
        connection.end()

        response.send(utils.createResult(error, data))
    })
})


router.put('/:CropType_id', (request, response) => {
    const { CropType_id } = request.params
    const { CropType_Name } = request.body
    const connection = db.connect()
    const statement = `update CropType set CropType_Name ='${CropType_Name}' where CropType_id = ${CropType_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:CropType_id', (request, response) => {
    const { CropType_id } = request.params
    const connection = db.connect()
    const statement = `delete from CropType where CropType_id = ${CropType_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/add', (request, response) => {
    const { CropType_Name } = request.body
    //const Crop_Img = request.file.filename
    const connection = db.connect()

    const statement1 = `select * from CropType where CropType_Name = '${CropType_Name}'`
    connection.query(statement1, (error, RegDetails) => {

        if (RegDetails.length == 0) {
            // user with the required email does not exist
            console.log(error);
            // insert a new record
            console.log(CropType_Name);

            const statement = `insert into CropType (CropType_Name) 
            values ('${CropType_Name}')`

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
