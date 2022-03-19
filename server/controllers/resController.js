const {Res} = require('../models/models')
const ApiError = require('../error/ApiError')
class ResController{
    

    async create(req,res){
        const {Date} = req.body
        const Res1 = await Res.create({Date})
    }
    async get(req,res){
        const Ress = await Res.findbyPk(User_id)
        
    }
}

module.exports = new ResController()