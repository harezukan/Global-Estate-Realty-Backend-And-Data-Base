const connection=require('../datebase/connection');

const getCity=()=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT *from city`;
        connection.query(query,(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports={
    getCity
}