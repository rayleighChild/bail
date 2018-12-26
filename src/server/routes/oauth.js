const express = require('express')
const sql = require('./db/db_connect')
const router = express.Router()
const passport = require('passport')

router.post('/facebook',function(req,res,next){
    sql.signIn(req.body,function(err,user){
        if(err){
            next(err)
        }
        console.log(user)
        
         //로그인이 성공하면, serializeUser 메서드를 이용하여 사용자 정보를 Session에 저장할 수 있다.
        passport.serializeUser(function(user, done) {
        console.log('serialize');
        done(null, user);
        });

    })
})
