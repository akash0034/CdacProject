const db = require('./db')
const utils = require('./utils')
const express = require('express')


const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect(

)
    const statement = `select * from  SeedDetails`
    connection.query(statement, (error, data) => {
        connection.end()
      
        response.send(utils.createResult(error, data))
    })
})



router.put('/:Seed_id', (request, response) => {
    const { Seed_id} = request.params
    const { Crop_id,Seed_Name,Seed_Price } = request.body
    const connection = db.connect()
    const statement = `update SeedDetails set 
    Crop_id = ${Crop_id},
    Seed_Name = '${Seed_Name}',
    Seed_Price = ${Seed_Price}
    
    where Seed_id = ${Seed_id}`

    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:Seed_id', (request, response) => {
    const { Seed_id } = request.params
    const connection = db.connect()
    const statement = `delete from SeedDetails where Seed_id = ${Seed_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/add', (request, response) => {
    const {Crop_id,Seed_Name,Seed_Price} = request.body

       
    const connection = db.connect()

    const statement1 = `select * from SeedDetails where Seed_Name = '${Seed_Name}'`
    connection.query(statement1, (error, RegDetails) => {

        if (RegDetails.length == 0) {
            console.log(error);
            console.log(Seed_Name);
            
            const statement = `insert into SeedDetails(Crop_id,Seed_Name,Seed_Price) values (${Crop_id},'${Seed_Name}',${Seed_Price})`

            connection.query(statement, (error, data) => {
                connection.end()
                response.send(utils.createResult(error, data))
                console.log(data)

            })
        } else {
            // user with email already exists
            connection.end()
            response.send(utils.createResult('Seed Name Alrady Exist...!'))
        }


    })


})

module.exports = router
