const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'cropimg/' })

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from  CropDetails`
    connection.query(statement, (error, data) => {
        connection.end()

        response.send(utils.createResult(error, data))
    })
})


router.put('/:Crop_id', (request, response) => {
    const { Crop_id } = request.params
    const {
        CropType_id, Crop_Sesaon, Crop_Category, Crop_Name, Crop_Info, Crop_Price, Crop_Img } = request.body
    const connection = db.connect()
    const statement = `update CropDetails set 
    CropType_id  ='${CropType_id}',             
    Crop_Sesaon  ='${Crop_Sesaon}',
    Crop_Category='${Crop_Category}',
    Crop_Name    ='${Crop_Name}',
    Crop_Info    ='${Crop_Info}',
    Crop_Price   ='${Crop_Price}',
    Crop_Img     ='${Crop_Img}'    where Crop_id = ${Crop_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:Crop_id', (request, response) => {
    const { Crop_id } = request.params
    const connection = db.connect()
    const statement = `delete from CropDetails where Crop_id = ${Crop_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})
//previous code
router.post('/add', upload.single('Crop_Img'), (request, response) => {
    const { CropType_id, Crop_Sesaon, Crop_Category, Crop_Name, Crop_Info, Crop_Price } = request.body
    const Crop_Img = request.file.filename
    const connection = db.connect()
    const statement1 = `select * from CropDetails where Crop_Name = '${Crop_Name}'`
    connection.query(statement1, (error, RegDetails) => {
        if (RegDetails.length == 0) {
            const statement = `insert into CropDetails (CropType_id ,Crop_Sesaon,Crop_Category,Crop_Name,Crop_Info,Crop_Price,Crop_Img) 
            values ('${CropType_id}', '${Crop_Sesaon}','${Crop_Category}','${Crop_Name}','${Crop_Info}',${Crop_Price},'${Crop_Img}')`
            console.log(error)
            connection.query(statement, (error, data) => {
                connection.end()
                response.send(utils.createResult(error, data))
                console.log(data)
            })
        } else {
            // user with email already exists
            connection.end()
            response.send(utils.createResult('Crop Already Exist.'))
        }
    })
})

module.exports = router