const router = require('express').Router()
const HomeImagesCtrl = require('../controllers/homeImagesCtrl')


router.get("/homeimages",HomeImagesCtrl.getImages)
router.post("/homeimages",HomeImagesCtrl.createImage)

module.exports = router