const {register,login,getUsersAdminPanel,userProfilePage,updateUserProfile}=require('../repository/User.repository');


const registerUser= async(req,res)=>{
    try{
        const user=req.body;
        const response=await register(user);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}


const loginUser= async(req,res)=>{
    try{
        const user=req.body;
        const response=await login(user);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}



const getAllUsers= async(req,res)=>{
    try{
        const response=await getUsersAdminPanel();
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

const personalProfile=async(req,res)=>{
    try{
        const  id=req.params.id;
        const response=await userProfilePage(id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

const updateUserPage=async(req,res)=>{
    try{
        const  user=req.body
        const response=await updateUserProfile(user);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

module.exports={
    registerUser,
    loginUser,
    getAllUsers,
    personalProfile,
    updateUserPage
}