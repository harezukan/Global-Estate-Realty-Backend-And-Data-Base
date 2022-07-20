const {insertProductImage}=require('../repository/SaveImage.repository');


const saveProductImage= async(req,res)=>{
    try{
        const product=req.body
        const response=await insertProductImage(product);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
}


module.exports={
    saveProductImage
}