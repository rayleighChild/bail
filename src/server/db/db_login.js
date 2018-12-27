const pool = require('./db_connect')

module.exports = function(){
    return{
        signIn: function(userInfo,callback){
            pool.getConnection(function(error,con){
                console.log(error)
                var id
                var username
                var sqlLogin='select * from user where provider_id = ?'
                con.query(sqlLogin,userInfo.provider_id,function(err,result){
                    if(err){
                        con.release()
                        return callback(err)
                    }
                    if(result.length ===0){
                        let sqlSignUp='insert into user (username, provider, provider_id) values (?,?,?)'
                        con.query(sqlSignUp,[userInfo.username,userInfo.provider,userInfo.provider_id],
                        function(signUpErr,results){
                            con.release()
                            if(signUpErr){
                                return callback(signUpErr)
                            }
                            id = results.insertId   
                                   
                        })
                    }else{
                        id=result[0].id
                    }
                    let user ={
                        id : id,
                        username : userInfo.username
                    }
                    callback(null,user)
                })
            })
        }
    }
}