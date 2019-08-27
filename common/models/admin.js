'use strict';

module.exports = function(Admin) {

    //remote methods
    Admin.remoteMethod(
        'getUsernameAdmin',
        {
            description: 'get username Admin',
            accepts: [
                { arg: 'username', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getUsernameAdmin', verb: 'get' }
        }
    );

    //function getUsernameAdmin -> get name with param

    Admin.getUsernameAdmin = function(username, callback){
        new Promise(function(resolve, reject){

            //query filter variable
            var filter = {
                where: {
                    username : {
                        like : username
                    }
                }
            }

            //querying data
            Admin.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }


    Admin.remoteMethod(
        'getId',
        {
            description: 'get id like',
            accepts: [
                { arg: 'id', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getId', verb: 'get' }
        }
    );

    Admin.getId = function(id, callback){
        new Promise(function(resolve, reject){
            
            Admin.findById(id, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Akhir Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
};
