const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

module.exports=()=>{
    passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
        done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
        console.log('serializeUser'+user)
        console.log(JSON.stringify(user))
      });
    
      passport.deserializeUser((user, done) => { // 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
        done(null, user); // 여기의 user가 req.user가 됨
        console.log('deserializeUser')
        console.log(JSON.stringify(user))
      });

      passport.use(new LocalStrategy({
        usernameField : 'userid',
        passwordField : 'password',
        passReqToCallback : true
    }
    ,function(req,userid, password, done) {
        if(userid=='hello' && password=='world'){
            var user = { 'userid':'hello',
                          'email':'hello@world.com'};
            return done(null,user);
        }else{
            return done(null,false);
        }
    }
    ))    
}