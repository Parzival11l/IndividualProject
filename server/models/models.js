const sequelize=require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    email:{type: DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:"USER"}
})
 
const Info = sequelize.define('info',{ 
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    Firstname:{type: DataTypes.STRING},
    Lastname:{type: DataTypes.STRING},
    DateOfBorn:{type:DataTypes.STRING},
    School:{type:DataTypes.STRING},
    Disabled:{type:DataTypes.STRING}
   
})

const Res = sequelize.define('res',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    Date:{type: DataTypes.STRING},
    TimeStart:{type: DataTypes.STRING},
    GameTime:{type:DataTypes.STRING},
    Result:{type:DataTypes.STRING}
    
})

const Words = sequelize.define('words',{
    adj:{type: DataTypes.STRING},
    noun:{type: DataTypes.STRING},
    verb:{type:DataTypes.STRING}
})
 
User.hasOne(Info)
Info.belongsTo(User)

User.hasMany(Res)
Res.belongsTo(User)

module.exports = {
    User,
    Info,
    Res,
    Words
}