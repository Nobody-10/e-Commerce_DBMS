const mysql = require("mysql")
const cors = require("cors")
const res = require("express/lib/response")
const path = require("path")
const express = require("express")
const app = express()
const con = require("./db_connection")
const seller_routes = require('./routes/seller_routes')
const customer_routes = require('./routes/customer_routes')
var bodyParser = require('body-parser')

//let connection = mysql.createConnection(con)
// app.use(con)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './public')))

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/homepage', (req, res) => {
    res.send("What a waste.")
})


app.use('/admin', seller_routes)
app.use('/customer', customer_routes)
app.listen(1703, () => {
    console.log('server is listening on port 1703')
    
})
// const http = require("http")

// const server = http.createServer((req, res) => {
//     res.write('welcome to home page')
//     res.end()
// })

// server.listen(1703)

