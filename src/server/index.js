var express = require('express')
var app = express()
var user = require('./routes/user')
var bodyParser = require('body-parser')
// var passport =require('./routes/passport')
var passport = require('passport')
var passportConfig = require('./routes/passport')
var session = require('express-session')


app.use(session({ secret: 'Bail', resave: true, saveUninitialized: false })); // 세션 활성화
app.use(passport.initialize())
app.use(passport.session())
passportConfig()
app.use(bodyParser.json())

app.use('/user',user)
app.get('/',function(req,res){
    res.send('Hello ')
})


app.use(function(err, req, res, next) {
    console.log(`error occurrence : ${err}`)
    if (!err.statusCode) {
      err.statusCode = 500
    }
    res.status(err.statusCode).json({
      errorMassage: err,
      success: false
    })
  })


app.listen(8080,function(){
    console.log('server on port 8080')
})