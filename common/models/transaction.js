'use strict';

module.exports = function(Transaction) {

    //remote methods
    Transaction.remoteMethod(
        'getNameTransaction',
        {
            description: 'get name transaction ',
            accepts: [
                { arg: 'customer', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameTransaction', verb: 'get' }
        }
    );

    //function getNameTransaction -> get name with param

    Transaction.getNameTransaction = function(customer, callback){
        new Promise(function(resolve, reject){

            //query filter variable
            var filter = {
                where: {
                    customer : {
                        like : customer
                    }
                }
            }

            //querying data
            Transaction.find(filter, function(err, result){
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

    
    Transaction.remoteMethod(
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

    Transaction.getId = function(id, callback){
        new Promise(function(resolve, reject){
            Transaction.findById(id, function(err, result){
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


    Transaction.remoteMethod(
        'getCategory',
        {
            description: 'get category like',
            accepts: [
                { arg: 'category', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getCategory', verb: 'get' }
        }
    );
    Transaction.get = function(category, callback){
        new Promise(function(resolve, reject){
            
            Transaction.findByCategory(category, function(err, result){
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
