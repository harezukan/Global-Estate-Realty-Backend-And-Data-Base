const connection=require('../datebase/connection');

const deleteProduct=(id)=>{
    
    return new Promise((resolve,reject)=>{
        const query=`DELETE FROM PRODUCT where id=?`;
        connection.query(query,[id],(err,result)=>{
            if(err) return reject(err);
            resolve('Uspjesno obrisano');
        });
    });
}

module.exports={
    deleteProduct
}