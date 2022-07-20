const {saveContactForm,getAllForm,contactPageForm,deleteForm}=require('../repository/Contact.repository');

const contactForm= async(req,res)=>{
    try{
        const product=req.body;
        const response=await saveContactForm(product);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}
const contactForms = async(req,res)=>{
    try{
        const response=await getAllForm();
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}

const contactPage= async(req,res)=>{
    try{
        const contact=req.body;
        const response=await contactPageForm(contact);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}


const deleteContactForm= async(req,res)=>{
    try{
        const  id=req.params.id;
        const response=await deleteForm(id);
        res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
 
}


module.exports={
    contactForm,
    contactForms,
    contactPage,
    deleteContactForm
    
}