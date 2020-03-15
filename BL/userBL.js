'use strict'

const Promise = require('promise');
const userDAL = require('../DAL/userDAL');
const userBL = {};

userBL.getAgeSummaryReportByNationality = (gender)=>{

    return new Promise((resolve,reject)=>{
            userDAL.getAllMaleUserGroupedByNationality(gender)
            .then((maleUsers)=>{
                var userGroupedByNationality = groupBy(maleUsers,'nat');
                resolve(generateReport(gender,userGroupedByNationality));
            })
            .catch((err)=>{
                reject(err);
            })
    });
}

const generateReport = (gender,userGroupedByNationality)=>{

    let response = {
        "gender":gender,
        "reportDate":[]
    };

    Object.keys(userGroupedByNationality).forEach(key => {
                
        let tempObj = {
            "nationality":key,
            "0-30":0,
            "30-50":0,
            "50 and above":0
        };
        userGroupedByNationality[key].forEach(user => {
            const age = Math.ceil(user.age);
            if(age <30){
                tempObj["0-30"]++;
            }
            else if(age >= 30 && age<50){
                tempObj["30-50"]++;
            }
            else if(age >= 50){
                tempObj["50 and above"]++;
            } 
        });
        response.reportDate.push(tempObj);
    });

    return response;
}

// Accepts the array and key
const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

module.exports = userBL;