const { isBuffer } = require('util');
const studentRepository = require('../../DataAccessLayer/repositories/StudentRepo.js');
const studentQuery = studentRepository.StudentRepo;
const student = new studentQuery();

class StudentServices{
    findTotalAndfullname(){
        return new Promise(function(resolve,reject){
            student.getDetails().then(function(rows,err){
                if(err){
                    return reject(err);
                }
                let students = Object.values(JSON.parse(JSON.stringify(rows)))
                let k= [];
                let val={};
                let result =[]
                for(let i=0;i<=students.length-1;i++){
                   let t = Object.values(students[i]);
                   let e = ["ID","firstnme","lastname","total"];
                   let total= t[3]+t[4]+t[5]+t[6];
                   k = t.slice(0,3);
                   k.push(total);
                //    console.log(k);
                   val =  Object.assign.apply({}, e.map( (v, i) => ( {[v]: k[i]} ) ) );
                   result.push(val)
             }
             let obj = JSON.stringify(result);
             resolve(obj);
             
            })
        })
        
            
        
           
           
       
    }
}

// const std1 = new StudentServices()
// std1.findTotalAndfullname().then(function(result){    console.log(result);})
module.exports={
    StudentServices:StudentServices
};