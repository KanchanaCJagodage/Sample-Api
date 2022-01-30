// const { rejects } = require('assert');
// const { resolve } = require('path/posix');
const connection = require('../databaseConnection.js');
class StudentRepo{
    getDetails(){
        return new Promise(function(resolve,reject){
        connection.dbcon.query("select ID,firstname,lastname,English,Maths,Science,History from student",function(err,rows){
            if (err){
                return reject(err);
            }
            resolve(rows);
        });
        });
    }
}

// const std1 = new StudentRepo();
// std1.getDetails().then(function(rows){
//     console.log(rows);
// });

module.exports = {
    StudentRepo:StudentRepo
};


/**
 * let students = Object.values(JSON.parse(JSON.stringify(rows)))
                let k= [];
                let val=[];
                for(let i=0;i<=students.length-1;i++){
                   let t = Object.values(students[i]);
                   let total= t[3]+t[4]+t[5]+t[6];
                   k = t.slice(0,3);
                   k.push(total);
                   val.push(k);
             };
 */