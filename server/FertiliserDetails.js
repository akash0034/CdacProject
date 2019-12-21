const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'FertImg/' })

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from  FertiliserDetails`
    connection.query(statement, (error, data) => {
        connection.end()

        response.send(utils.createResult(error, data))
    })
})


router.put('/:Fertiliser_id', (request, response) => {
    const { Fertiliser_id } = request.params
    const {Crop_id,Fertiliser_name,Fertiliser_Category,Fertiliser_Brand,
        Fertiliser_Oncrop,Fertiliser_Info,Fertiliser_Price,Fertiliser_Img} = request.body
    const connection = db.connect()
    const statement = `update FertiliserDetails set 
 Crop_id             ='${Crop_id}',
 Fertiliser_Category ='${Fertiliser_Category}',
 Fertiliser_Brand    ='${Fertiliser_Brand}',
 Fertiliser_Oncrop   ='${Fertiliser_Oncrop}',
 Fertiliser_Info     ='${Fertiliser_Info}',
 Fertiliser_Price    ='${Fertiliser_Price}',
 Fertiliser_Img      ='${Fertiliser_Img}'
 Fertiliser_name    ='${Fertiliser_name}'
  where Fertiliser_id = ${Fertiliser_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:Fertiliser_id', (request, response) => {
    const { Fertiliser_id } = request.params
    const connection = db.connect()
    const statement = `delete from FertiliserDetails where Fertiliser_id = ${Fertiliser_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/add', upload.single('Fertiliser_Img'),(request, response) => {
    const { Crop_id, Fertiliser_Category, Fertiliser_Brand, Fertiliser_Oncrop, Fertiliser_Info, Fertiliser_Price} = request.body
    const Fertiliser_Img = request.file.filename
    const connection = db.connect()
    const statement = `insert into FertiliserDetails (Crop_id,Fertiliser_Category,Fertiliser_Brand,Fertiliser_Oncrop,Fertiliser_Info,Fertiliser_Price,Fertiliser_Img,Fertiliser_name)
    values (${Crop_id},'${Fertiliser_Category}','${Fertiliser_Brand}','${Fertiliser_Oncrop}','${Fertiliser_Info}',${Fertiliser_Price},'${Fertiliser_Img}',${Fertiliser_name})`

       connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
        console.log(data)

    })

    })


module.exports = router