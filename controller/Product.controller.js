const {getProductAllAdminPanel,getProductCategory,getProductImages,getTopListing,detailsProduct, cityProduct,update,filterProd}=require('../repository/Products.repository');

const getAllProductsAdmin= async(req,res)=>{
    try{
        const response=await getProductAllAdminPanel();
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

const getAllProductImage= async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await getProductImages(id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}



const getCategory= async(req,res)=>{
    try{
        const  id=req.params.id;
        const response=await getProductCategory(id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

const getCityProduct= async(req,res)=>{
    try{
        const  id=req.params.id;
        const response=await cityProduct(id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

const topListings= async(req,res)=>{
    try{
        
        const response=await getTopListing();
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

const getDetailsProduct= async(req,res)=>{
    try{
        const  id=req.params.id;
        const response=await detailsProduct(id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

const updateProduct= async(req,res)=>{
    try{
        const  product=req.body
        const response=await update(product);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}





module.exports={
    getAllProductsAdmin,
    getCategory,
    getAllProductImage,
    topListings,
    getDetailsProduct,
    getCityProduct,
    updateProduct,
   
}