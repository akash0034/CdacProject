
const db = require('./db')
const utils = require('./utils')
const express = require('express')


const router = express.Router()


router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from Trading t INNER JOIN TraderReg tr ON t.Tr_id=tr.Tr_id INNER JOIN TradingType ty  ON t.TradingType_id=ty.TradingType_id INNER JOIN SeedDetails s ON t.Seed_id=s.Seed_id
     INNER JOIN FertiliserDetails f ON t.Fertiliser_id=f.Fertiliser_id INNER JOIN CropDetails c ON t.Crop_id=c.Crop_id INNER JOIN Servises se ON t.Service_id=se.Service_id INNER JOIN ClientRegDetails ce ON t.User_id=ce.User_id `
    
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

   


router.put('/:Trading_id', (request, response) => {
    const { Trading_id } = request.params
    const { Tr_id, TradingType_id, Seed_id, Fertiliser_id, Crop_id, Service_id, User_id, Trading_price } = request.body
    const connection = db.connect()
    const statement = `update Trading set Tr_id =${Tr_id},
    TradingType_id=${TradingType_id},Seed_id =${Seed_id},Fertiliser_id=${Fertiliser_id},Crop_id =${Crop_id},
    Service_id=${Service_id},User_id=${User_id},Trading_price=${Trading_price} where Trading_id =${Trading_id}`

    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:Trading_id', (request, response) => {
    const { Trading_id } = request.params
    const connection = db.connect()
    const statement = `delete from Trading where Trading_id = ${Trading_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/add', (request, response) => {
    const { Tr_id, TradingType_id, Seed_id, Fertiliser_id, Crop_id, Service_id, User_id, Trading_price } = request.body
    const connection = db.connect()

    const statement = `insert into Trading(Tr_id, TradingType_id, Seed_id, Fertiliser_id, Crop_id, Service_id, User_id, Trading_price ) values
     (${Tr_id}, ${TradingType_id},${Seed_id},${Fertiliser_id},${Crop_id},${Service_id},${User_id},${Trading_price})`

    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
        console.log(data)

    })

})


module.exports = router


