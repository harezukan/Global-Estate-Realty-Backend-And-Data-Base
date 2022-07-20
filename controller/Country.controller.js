const {getCountry}=require('../repository/Country.repository');


const getAllCountry= async(req,res)=>{
    try{
        
        const response=await getCountry();
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
}

module.exports={
    getAllCountry
}