const Router = require('express')
const router = new Router()
const Userrouter = require('./Userrouter')
const inforouter = require('./inforouter')
const wordsrouter = require('./wordsrouter')
const resrouter = require('./resruouter')

router.use('/user', Userrouter)
router.use('/info', inforouter)
router.use('/res', resrouter)
router.use('/words', wordsrouter)


module.exports = router