'use strict'

const Promise = require('promise');
const mongoose = require('mongoose');
const User = mongoose.model('Users')
const userDAL = {};

userDAL.getAllMaleUserGroupedByNationality = (gender)=>{

    return new Promise((resolve,reject)=>{

        User.aggregate( [
            { $match: { 'gender' : gender } }, 
            { $project: {
                nat:"$nat",
                gender:"$gender",
                age: { 
                    $divide: [{$subtract: [ new Date(), "$dob" ] }, 
                            (365 * 24*60*60*1000)]
                } 
             } 
        } ] ,(err,user)=>{
            if(!err)
            resolve(user);
            else
            reject(err);
        });
    });
}

module.exports = userDAL;