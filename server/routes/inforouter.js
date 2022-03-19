const Router = require('express')
const router = new Router()

router.post('/form',)
router.get('/checkinfo',checkRole('Teacher'),infoController.get)


module.exports = router