const connection=require('../datebase/connection');


const getCategories=()=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT *from category`;
        connection.query(query,(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports={
    getCategories
}