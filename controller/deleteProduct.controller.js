const {deleteProduct}=require('../repository/deleteProduct.repository');

const deletePro= async(req,res)=>{
    try{
        const  id=req.params.id;
        const response=await deleteProduct(id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

module.exports={
    deletePro
}