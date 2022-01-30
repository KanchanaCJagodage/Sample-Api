const services = require('../ServiceLayer/services/StudentServices');
const studentService = services.StudentServices
const serve = new studentService();

serve.findTotalAndfullname().then(function(result){
    console.log(result);
})
getTotal = function(req,res){
     serve.findTotalAndfullname().then(function(err,result){
         if(err){
             return res.status(500).send({message:"error"});
            
         }
         else{
             console.log(result);
             return res.json(result);
         }
     })
}

module.exports = {
    getTotal:this.getTotal
}