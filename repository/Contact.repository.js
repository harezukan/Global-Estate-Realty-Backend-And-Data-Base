const connection=require('../datebase/connection');

const saveContactForm=(product)=>{
    const{fullName,email,phone,message,title}=product;
    const query=`INSERT INTO contact_form (fullName,email,phone,message,title)
    VALUES (?,?,?,?,?)`;
    return new Promise((resolve,reject)=>{
    connection.query(query,[fullName,email,phone,message,title],(err,result)=>{
        if(err) return reject(err);
        resolve(result);
    });
});
}

const getAllForm=()=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT * from contact_form `;
            connection.query(query,(err,result)=>{
                if(err) return reject(err);
                resolve(result);
            });
        });
}

const contactPageForm=(contact)=>{
    const{fullName,email,phone,message}=contact;
    const query=`INSERT INTO contact_form (fullName,email,phone,message)
    VALUES (?,?,?,?)`;
    return new Promise((resolve,reject)=>{
    connection.query(query,[fullName,email,phone,message],(err,result)=>{
        if(err) return reject(err);
        resolve(result);
    });
});
}

const deleteForm=(id)=>{
    
    return new Promise((resolve,reject)=>{
        const query=`DELETE FROM contact_form where id=?`;
        connection.query(query,[id],(err,result)=>{
            if(err) return reject(err);
            resolve('Uspjesno obrisano');
        });
    });
}



module.exports={
    saveContactForm,
    getAllForm,
    contactPageForm,
    deleteForm
    
}