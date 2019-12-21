const db = require('./db')
const utils = require('./utils')
const express = require('express')
const cryptoJs = require('crypto-js')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from ClientRegDetails`
    connection.query(statement, (error, data) => {
        connection.end()
        /*
        const RegDetail = []
        for (let index = 0; index < data.length; index++) {
            const ClientRegDetails = data[index]
            RegDetail.push({
                User_id: ClientRegDetails['User_id'],
                User_Name: ClientRegDetails['User_Name'],
                User_Email: ClientRegDetails['User_Email'],
                User_Phone:ClientRegDetails['User_Phone'],
                User_Gender:ClientRegDetails['User_Gender'],
      
                User_State:ClientRegDetails['User_State'],
                User_Dist:ClientRegDetails['User_Dist'],
                User_City:ClientRegDetails['User_City'],
                User_Pin:ClientRegDetails['User_Pin'],
                User_Password:ClientRegDetails['User_Password']
                
            })
        }*/
        response.send(utils.createResult(error, data))
    })
})


router.post('/login',(request,response)=>{
    const{User_Email,User_Password} = request.body
    const encryptedPassword = '' + cryptoJs.MD5(User_Password)
    const connection = db.connect()

    const statement = `select * from ClientRegDetails where User_Email = '${User_Email}' and User_Password = '${encryptedPassword}'`
    connection.query(statement,(error,RegDetail)=>{
        connection.end()
        if(RegDetail.length == 0){
        response.send(utils.createResult('Email or Password does not exist'))
        }else {
            const ClientRegDetails = RegDetail[0] 
            const info ={
                User_Name: ClientRegDetails['User_Name'],
                User_Email: ClientRegDetails['User_Email']
            }
            response.send(utils.createResult(null,info))
        }
    })

})





router.put('/:User_id', (request, response) => {
    const {User_id} = request.params
    const {User_Name,
        User_Email,
        User_Phone,
        User_Gender,
        User_State,
        User_Dist,
        User_City,
        User_Pin,
        User_Password} = request.body
    const connection = db.connect()
    const statement = `update ClientRegDetails set 
    User_Name    ='${User_Name}',
    User_Email   ='${User_Email}',
    User_Phone   ='${User_Phone}',
    User_Gender  ='${User_Gender}',
    User_State   ='${User_State}',
    User_Dist    ='${User_Dist}',   
    User_City    ='${User_City}',
    User_Pin     ='${User_Pin}',
    User_Password='${User_Password}' where User_id=${User_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})





router.delete('/:User_id', (request, response) => {
    const {User_id} = request.params
    const connection = db.connect()
    const statement = `delete from ClientRegDetails where User_id = ${User_id}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/register', (request, response) => {
    const {User_Name,
        User_Email,
        User_Phone,
        User_Gender,
        User_State,
        User_Dist,
        User_City,
        User_Pin,
        User_Password} = request.body
    const encryptedPassword = '' + cryptoJs.MD5(User_Password)
    const connection = db.connect()

    const statement1 = `select * from ClientRegDetails where User_Email = '${User_Email}'`
    connection.query(statement1, (error, RegDetails) => {

        if (RegDetails.length == 0) {
            // user with the required email does not exist
            console.log(error);
            // insert a new record
            const statement = `insert into ClientRegDetails (
                User_Name,
                User_Email,
                User_Phone,
                User_Gender,
                User_State,
                User_Dist,
                User_City,
                User_Pin,
                User_Password) values ('${User_Name}', '${User_Email}'
                ,'${User_Phone}','${User_Gender}',
                '${User_State}','${User_Dist}'
                ,'${User_City}',${User_Pin}, '${encryptedPassword}')`
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

module.exports =router