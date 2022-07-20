const connection=require('../datebase/connection');

const getCountry=()=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT *from country`;
        connection.query(query,(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports={
    getCountry
}