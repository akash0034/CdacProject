const db = require('./db')
const utils = require('./utils')
const express = require('express')


const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect(

)
    const statement = `select * from  TradingType`
    connection.query(statement, (error, data) => {
        connection.end()
      
        response.send(utils.createResult(error, data))
    })
})

router.put('/:TradingType_id', (request, response) => {
    const { TradingType_id} = request.params
    const {Trader_Name} = request.body
    const connection = db.connect()
    const statement = `update TradingType set Trader_Name = '${Trader_Name}' where TradingType_id = ${TradingType_id}`

    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})
router.delete('/:TradingType_id', (request, response) => {
    const { TradingType_id } = request.params
    const connection = db.connect()
    const statement = `delete from TradingType where TradingType_id = ${TradingType_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/add', (request, response) => {
    const {Trader_Name} = request.body

    const connection = db.connect()
           
            const statement = `insert into TradingType (Trader_Name) values ('${Trader_Name}')`

            connection.query(statement, (error, data) => {
                connection.end()
                response.send(utils.createResult(error, data))
                console.log(data)

            })
        }) 
    


module.exports = router
