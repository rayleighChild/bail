const mysql = require('mysql')

module.exports=(function(){
    var config = require('./.db_config')
    var pool = mysql.createPool({
        database:config.database,
        host : config.host,
        password : config.host,
        user : config.user
    })
    return{
        end: function(callback){
            pool.end(callback)
        },
        getConnection: function(callback){
            pool.getConnection(callback)
        }
    }
})()