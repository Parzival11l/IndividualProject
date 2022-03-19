const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User,Res , Info} = require('../models/models')
const { BadRequest } = require('../error/ApiError')
const jwt = require('jsonwebtoken')


const generateJwt = (id, email) => {
    return jwt.sign(
        {id: User.id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn:'24h'})
}

class UserController{
    async registration(req,res){
        const {email, password,role} = req.body
        if(!email||!password){
            return next(ApiError,BadRequest('Uncorrect email or password'))
        }
        const candidate = await User.findOne({where:{email}})
        if(candidate){
            return next(ApiError,BadRequest('A user with such an email already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const Useer = await User.create({email,role,password: hashPassword})
        const Infoo = await Info.create({userId: User.id})
        const Ress = await Res.create({userId: User.id})
        const jwt =generateJwt(User.id, User.email, User.role)
            return res.json({token})

    }
    async login(req,res){
        const {email, password} = req.body
        const User = await User.findOne({where:{email}})
        if(!User){
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, User.password)
        if(!comparePassword){
            return next(ApiError.internal('Password not correct'))
           
        } 
        const token = generateJwt(User.id,User.email,User.role)
            return res.json({token})
    }

    async check(req,res, next){
            const token = generateJwt(req.User.id, req.User.email, req.User.role)
            return res.json({token})
    }
}


module.exports = new UserController()