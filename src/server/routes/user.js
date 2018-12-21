//마찬가지로 여기서도 express를 사용한다
var express = require('express')
//express의 기능중 router를 사용한다
var router = express.Router()

//router에는 put get post delete 등 여러방식이 있다
//get방식으로 localhost:8080/user/2 이런식으로오면 :id는 2를 가리킨다
//req는 request(요청받은값)  res는 response(응답해주는값) 
//req.params.id 는 req의 파라미터로 온것들중에 :id를 쓰겠다
router.get('/:id',function(req,res){
    res.send('이것은 아이디'+req.params.id)
})
//json으로 돌려준다
router.put('/',function(req,res){
    res.json({success: true})
})
//상태를 에러를 나타내는 400으로 만들어주고 저런 message값을 json방식으로 돌려준다
// router.post('/',function(req,res){
//     res.status(400).json({message : 'It is bad connect'})
// })
router.delete('/',function(req,res){
    res.send('delete request')
})
//이것을 확인해보고싶으면 크롬 익스텐션인 포스트맨을 이용
//localhost/8080/user 를 post방식으로 보내고 그 안의 내용은 스샷으로보내드리겠습니다
router.post('/',function(req,res){
    console.log(JSON.stringify(req.body))
    res.json({
        success:true,
        username:req.body.username
    })
})
//이 작업을 해줘야 index.js에서 라우터로 사용을 할 수 있다
module.exports =  router;