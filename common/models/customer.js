'use strict';

module.exports = function(Customer) {

    //remote methods
    Customer.remoteMethod(
        'getNameCustomer',
        {
            description: 'get name customer',
            accepts: [
                { arg: 'firstname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameCustomer', verb: 'get' }
        }
    );

    //function getNameCustomer -> get name with param

    Customer.getNameCustomer = function(firstname, callback){
        new Promise(function(resolve, reject){

            //query filter variable
            var filter = {
                where: {
                    firstname : {
                        like : firstname
                    }
                }
            }

            //querying data
            Customer.find(filter, function(err, result){
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

    Customer.remoteMethod(
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

    Customer.getId = function(id, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    id : {
                        like : id
                    }
                }
            }
            Customer.findById(filter, function(err, result){
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
