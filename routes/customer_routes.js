const router = require("express").Router();
const path = require('path')
const con = require("../db_connection")
const mongoose = require("mongoose")


router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/CustomerLogin.html'))//(path.resolve(__dirname, './views/AdminLogin.ejs'))
    //res.render('views/AdminLogin,html')
    //res.redirect('/login/check')
})

router.post('/login/check', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let sql = 'SELECT * FROM DBMSProject.clogin WHERE username = ? AND password = ?'
    con.query(sql, [username, password], function(err, result, fields) {
        if(err) throw err;
        if(result.length == 0)
        {
            res.redirect('/login')
            alert('User does not exist, Please Register!')
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
    res.end("This is the register page")
})

router.post('/register/check', (req, res) => {
    if(req.username != NULL && req.password != NULL)
    {
        if(req.password == req.repassword)
        {
            con.query('Insert into DBMSProject.clogin (username, password) values (?, ?)', [username, password], function(err, result, fields) {
                if(err) throw err;
                res.redirect('/login')
                alert('Registration Succeful! Please login to continue.')
                
            })
        }
        else
        {
            alert("Passwords do not match!")
        }
    }
    else
    {
        alert("Passwords do not match!")
    }
})

module.exports = router