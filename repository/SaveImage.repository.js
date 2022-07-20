const connection=require('../datebase/connection');

const insertProductImage=(product)=>{
    const {productId,image}=product;
    return new Promise((resolve,reject)=>{
        const query=`INSERT into product_image (productId,image) values (?,?)`;
        connection.query(query,[productId,image],(err,result)=>{
            if(err) return reject(err);
            resolve('Successfully add image');
        });
    });
}


module.exports={
    insertProductImage
}