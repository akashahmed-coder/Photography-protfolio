const Homeimages = require('../models/homeImageModel')

const HomeImagesCtrl = {
    getImages:async(req,res)=>{
        try {
            const images = await Homeimages.find()
            res.json({images})
        } catch (err) {
            res.status(500).json({msg:err.message})
        }
    },
    createImage: async(req,res) =>{
        try {
            const {heading,description,showingImage,hoverImage,relatedImages,client,role,url} = req.body
            if(!showingImage || !hoverImage){
                res.status(400).json({msg:"Please Upload Display Image and Hover Image Properly."})
            }
            const newHomeImage = new Homeimages({
                heading,description,showingImage,hoverImage,relatedImages,client,role,url
            })
            await newHomeImage.save()
            res.json({msg:"New Image Section is Created"})
        } catch (err) {
            res.status(500).json({msg:err.message})   
        }
    }

}

module.exports = HomeImagesCtrl