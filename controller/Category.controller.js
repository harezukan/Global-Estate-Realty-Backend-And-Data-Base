const {getCategories}=require('../repository/Category.repository');


const getAllCategories= async(req,res)=>{
    try{
        const response=await getCategories();
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports={
    getAllCategories
}