const router = require("express").Router();
const path = require('path')
const con = require("../db_connection")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')


const urlencodedParser = bodyParser.urlencoded({ extended: true })
//route.use('/views', require('./views'))

router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/AdminLogin.html'))//(path.resolve(__dirname, './views/AdminLogin.ejs'))
    //res.render('views/AdminLogin,html')
    //res.redirect('/login/check')
})

router.post('/login/check', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let sql = 'SELECT * FROM DBMSProject.loginDetails WHERE username = ? AND password = ?'
    con.query(sql, [username, password], function(err, result, fields) {
        if(err) throw err;
        if(result.length == 0)
        {
            res.redirect('/admin/login')
            //window.alert('User does not exist, Please Register!')
        }
        else{
            res.redirect('/homepage')
        }
    })
    console.log(req.body)
})

router.get('/homepage', (req, res) => {
    res.end("Login Succesful, Welcome to Homepage")
})

router.get('/register', (req, res) => {
   // res.end("This is the register page")
    res.sendFile(path.resolve(__dirname, '../views/SellerRegister.html'))//(path.resolve(__dirname, './views/AdminLogin.ejs'))
})

router.post('/register/check', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let repassword = req.body.repassword
    if(password != repassword) 
    {
        //res.send('Passwords do not match')
    }
    let sql = 'SELECT * FROM DBMSProject.loginDetails WHERE username = ? AND password = ?'
    console.log(sql)
    con.query(sql, [username, repassword], function(err, result, fields) {
        if(err) throw err;
        if(result.length == 0)
        {
            sql = 'insert into DBMSProject.loginDetails(username, password) values (?, ?)'
            con.query(sql, [username, repassword], function(err, result, fields) {
                if(err) throw err;
                //res.send('Registration Succesful')
            })
            res.redirect('/admin/login')
            //window.alert('User does not exist, Please Register!')
        }
        else{
            //res.send('User already exists')
        }
    })
})

module.exports = router