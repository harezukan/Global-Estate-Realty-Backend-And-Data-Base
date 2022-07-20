const connection=require('../datebase/connection');
const addProduct=(product)=>{
    const {title,address,price,categoryId,cityId,countryId,beds,baths,description,primaryImage}=product;
    return new Promise((resolve,reject)=>{
        const query=`INSERT into product values (null,?,?,?,?,?,?,?,?,?,?)`;
        connection.query(query,[title,address,price,categoryId,cityId,countryId,beds,baths,description,primaryImage],(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports={
  
    addProduct
}