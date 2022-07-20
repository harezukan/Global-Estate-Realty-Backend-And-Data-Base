const {addProduct}=require('../repository/Add-product.repository');


const save= async(req,res)=>{
    try{
        const product=req.body
        const response=await addProduct(product);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports={
    save
}