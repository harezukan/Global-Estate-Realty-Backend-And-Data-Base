const {getCity}=require('../repository/City.repository');


const getAllCities= async(req,res)=>{
    try{
        
        const response=await getCity();
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports={
    getAllCities
}