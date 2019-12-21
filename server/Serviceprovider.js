

 const db = require('./db')
const utils = require('./utils')
const express = require('express')


const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect(

)
    const statement = `select * from  Serviceprovider`
    connection.query(statement, (error, data) => {
        connection.end()
      
        response.send(utils.createResult(error, data))
    })
})



router.put('/:ServicePr_id', (request, response) => {
    const { ServicePr_id} = request.params
    const {  Service_id,PerDayPrice,Instruction } = request.body
    const connection = db.connect()
    const statement = `update Serviceprovider set 
    Service_id = ${Service_id},
    PerDayPrice = ${PerDayPrice},
    Instruction = '${Instruction}'
    
    where ServicePr_id = ${ServicePr_id}`

    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:ServicePr_id', (request, response) => {
    const { ServicePr_id } = request.params
    const connection = db.connect()
    const statement = `delete from Serviceprovider where ServicePr_id = ${ServicePr_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/add', (request, response) => {
    const {Service_id,PerDayPrice,Instruction} = request.body

       
    const connection = db.connect()
            
            const statement = `insert into Serviceprovider(Service_id,PerDayPrice,Instruction) values (${Service_id},${PerDayPrice},'${Instruction}')`

            connection.query(statement, (error, data) => {
                connection.end()
                response.send(utils.createResult(error, data))
                console.log(data)

            })
        
        })
module.exports = router
