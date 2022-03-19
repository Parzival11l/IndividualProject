const Router = require('express')
const resController = require('../controllers/resController')
const router = new Router()


router.post('/cret', resController.create)
router.get('/results',checkRole('Teacher'),resController.get)


module.exports = router