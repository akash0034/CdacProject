const express = require('express')
const bodyParser = require('body-parser')

const routerClient = require('./ClientRegDetails')
const routerTrader = require('./TraderReg')
const routerCrop = require('./CropDetails')
const routeFert = require('./FertiliserDetails')
const routeCroptype = require('./CropType')
const routeSeedD = require('./SeedDetails')
const routeservice = require('./Servises')
const routerserprovider = require('./Serviceprovider')
const roteTradetype = require('./TradingType')
const routeTrading = require('./Trading')


// import the routers


const app = express()

// add middlewares

// for CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('FertImg'))
app.use(express.static('cropimg'))
app.use(express.static('thumbnail'))
app.use(bodyParser.json())

app.use('/ClientRegDetails', routerClient)
app.use('/TraderReg', routerTrader)
app.use('/CropDetails', routerCrop)
app.use('/FertiliserDetails', routeFert)
app.use('/CropType', routeCroptype)
app.use('/SeedDetails', routeSeedD)
app.use('/Servises', routeservice)
app.use('/Serviceprovider', routerserprovider)
app.use('/TradingType', roteTradetype)
app.use('/Trading', routeTrading)

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})
