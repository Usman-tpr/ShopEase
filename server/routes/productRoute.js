const router = require('express').Router();
const authMiddleware = require('../Middlewares/authMiddleware')
const Product = require('../Models/productModel')
router.post('post-product',authMiddleware,async(req,res)=>{
           try {
            const product = await new Product(req.body)

            res.send({
                success:true,
                message: 'Product created successfully',
                product
            })
           } catch (error) {
            res.send({
                success:false,
                message: error.message
            })
           }
})

module.exports = router