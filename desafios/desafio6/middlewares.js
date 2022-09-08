const esAdmin = true
function soloAdmins(req,res,next){
    if(!esAdmin){
        res.json({msg : "no tenes permiso"})
    }else{
        next()
    }
}

module.exports = {soloAdmins}