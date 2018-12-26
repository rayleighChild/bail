var express = require('express')
var router = express.Router()
var passport = require('passport')
// router.get('/:id',function(req,res){
//     res.send('이것은 아이디'+req.params.id)
// })
// router.put('/',function(req,res){
//     res.json({success: true})
// })

// router.delete('/',function(req,res){
//     res.send('delete request')
// })

// router.post('/',function(req,res){
//     console.log(JSON.stringify(req.body))
//     res.json({
//         success:true,
//         username:req.body.username
//     })
// })
console.log('유저  ')
router.get('/login', passport.authenticate('local', {
    failureRedirect: '/'
  }), (req, res) => {
    res.redirect('/');
    console.log('어디로가나요')
  });

module.exports =  router;