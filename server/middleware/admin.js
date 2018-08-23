let admin = (req,res,next) =>{
    if(req.user.role === 0){
        return res.send('you are not allowed, got out now.')
    }
    next();
};

module.exports = {admin}