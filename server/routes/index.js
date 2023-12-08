const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const checkRole = require("../middleware/chechRoleMiddleware");

router.use('/user', checkRole('ADMIN'), userRouter)
router.use('/type', checkRole('ADMIN'), typeRouter)
router.use('/product', checkRole('ADMIN'), productRouter)
router.use('/brand', checkRole('ADMIN'), brandRouter)


module.exports = router