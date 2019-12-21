const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from TraderReg`
    connection.query(statement, (error, data) => {
        connection.end()
      
        response.send(utils.createResult(error, data))
    })
})


router.post('/login', (request, response) => {
    const { Tr_Email, Tr_password } = request.body
    const encryptedPassword = '' + cryptoJs.MD5(Tr_password)
    const connection = db.connect()

    const statement = `select * from TraderReg where Tr_Email = '${Tr_Email}' and Tr_password = '${encryptedPassword}'`
    connection.query(statement, (error, RegDetail) => {
        connection.end()
        if (RegDetail.length == 0) {
            response.send(utils.createResult('Email or Password does not exist'))
        } else {
            const TraderReg = RegDetail[0]
            const info = {
                Tr_name: TraderReg['Tr_name'],
                Tr_Email: TraderReg['Tr_Email']
            }
            response.send(utils.createResult(null, info))
        }
    })
})

router.delete('/:Tr_id', (request, response) => {
    const { Tr_id } = request.params
    const connection = db.connect()
    const statement = `delete from TraderReg where Tr_id = ${Tr_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/register', (request, response) => {
    const {
        Tr_name,
        Tr_Address,
        Tr_Email,
        Tr_Phone,
        Tr_Catagory,
        Tr_password } = request.body

        // const Tr_name = request.body.Tr_name
    const encryptedPassword = '' + cryptoJs.MD5(Tr_password)
    const connection = db.connect()

    const statement1 = `select * from TraderReg where Tr_Email = '${Tr_Email}'`
    connection.query(statement1, (error, RegDetails) => {

        if (RegDetails.length == 0) {
            // user with the required email does not exist
            console.log(error);
            // insert a new record
            console.log(Tr_name);
            
            const statement = `insert into TraderReg (
                Tr_name,  
                Tr_Address,  
                Tr_Email  ,  
                Tr_Phone  ,  
                Tr_Catagory, 
                Tr_password) values ('${Tr_name}', '${Tr_Address}'
                ,'${Tr_Email}','${Tr_Phone}','${Tr_Catagory}',
                '${encryptedPassword}')`
            connection.query(statement, (error, data) => {
                connection.end()
                response.send(utils.createResult(error, data))
                console.log(data)

            })
        } else {
            // user with email already exists
            connection.end()
            response.send(utils.createResult('email exists. please use another email.'))
        }


    })


})

module.exports = router