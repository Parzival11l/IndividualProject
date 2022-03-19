class infoController{

    async create(req,res){

    }
    async get(req,res){
        const infoo = await Info.findbyPk(User_id)
    }

    
}

module.exports = new infoController()