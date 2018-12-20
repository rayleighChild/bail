//익스프레스라는 프레임워크를 사용한다 
var express = require('express')
//이 받은 express를 app이란 이름으로 생성한다 즉 app에는 express의 기능들이 존재한다
var app = express()
//routes/user.js를 user라는이름으로 사용한다
var user = require('./routes/user')
//body-parser의 기능은 json형태로 변환을 시키게 해주는 미들웨어 
//내가 이해한 미들웨어란 express로 요청이 가기전에 한번 걸러주는 ??
//아니면 미들웨어의 효과를 적용시키고 express로 가게 해주는 녀석임, 미들웨어는 여러종류를 쓸수있나봐
var bodyParser = require('body-parser')
////이 명령어는 json을 사용하게 해준다
app.use(bodyParser.json())
//  localhost:8080/user 라고 오는놈들은 다 routes/user로 보낸다
app.use('/user',user)
//localhost:8080/ 으로 get방식 요청을 하면 hello를 반환함(localhost:8080에 들어가보면 알수있음)
app.get('/',function(req,res){
    res.send('Hello ')
})
// 이 서버를 킬건데 localhost:8080으로 키겠다
app.listen(8080,function(){
    console.log('server on port 8080')
})