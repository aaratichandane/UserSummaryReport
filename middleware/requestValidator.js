
module.exports = function(req, res, next) {
  
    if(req.query.gender){
        if(req.query.gender == 'male' || req.query.gender=='female')
        next();
        else
        res.status(400).send({message:"Query param gender having invalid value"});
    }
    else{
        res.status(400).send({message:"Query param gender is missing"});
    }
};