'use strict';

module.exports = function(Commodity) {
    //remote methods
    Commodity.remoteMethod(
        'getNameCommodity',
        {
            description: 'get name commodity',
            accepts: [
                { arg: 'item_name', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameCommodity', verb: 'get' }
        }
    );

    //function getNameCommodity -> get name with firstname param

    Commodity.getNameCommodity = function(item_name, callback){
        new Promise(function(resolve, reject){

            //query filter variable
            var filter = {
                where: {
                    item_name : {
                        like : item_name
                    }
                }
            }

            //querying data
            Commodity.find(filter, function(err, result){
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

    Commodity.remoteMethod(
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

    Commodity.getId = function(id, callback){
        new Promise(function(resolve, reject){
            
            Commodity.findById(id, function(err, result){
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

    Commodity.remoteMethod(
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
    Commodity.getCategory = function(category, callback){
        new Promise(function(resolve, reject){
            
            //query filter variable
            var filter = {
                where: {
                    category : {
                        like : category
                    }
                }
            }
            Commodity.find(filter, function(err, result){
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
