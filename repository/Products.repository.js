const { updateProduct } = require('../controller/Product.controller');
const connection=require('../datebase/connection');

const getProductAllAdminPanel=()=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT product.id,product.title,product.address,product.price,product.beds,product.baths,product.categoryId,product.countryId,product.cityId,product.description,
        category.name,city.cityName,country.countryName FROM product,city,category,country
         where product.categoryId=category.id and product.cityId=city.id and product.countryId=country.id `;
        connection.query(query,(err,result)=>{
            if(err) return reject(err);
            
            resolve(result);
        });
    });
}

const getProductImages=(id)=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT image from product_image where productId=? `;
        connection.query(query,[id],(err,result)=>{
            if(err) return reject(err);
            const response=result ?result.map(p=>p.image) :[];
            resolve(response);
        });
    });
}




const getProductCategory=(id)=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT product.id,product.title,product.address,product.price,product.beds,product.baths,product.primaryImage,
        category.name,city.cityName,country.countryName FROM product,city,category,country
         where product.categoryId=category.id and product.cityId=city.id and product.countryId=country.id  and product.categoryId=?`;
        connection.query(query,[id],(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        });
    });
}


const cityProduct=(id)=>{
    return new Promise((resolve,reject)=>{
        const query=`SELECT product.id,product.title,product.address,product.price,product.beds,product.baths,product.primaryImage,
        category.name,city.cityName,country.countryName FROM product,city,category,country
         where product.categoryId=category.id and product.cityId=city.id and product.countryId=country.id and product.cityId=?`;
        connection.query(query,[id],(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        });
    });
}



const getTopListing=()=>{
    return new Promise((resolve,reject)=>{
    const query=`SELECT product.id,product.title,product.address,product.price,product.beds,product.baths,
        category.name,city.cityName,country.countryName FROM product,city,category,country
         where product.categoryId=category.id and product.cityId=city.id and product.countryId=country.id and product.categoryId=1 LIMIT 4`;
        connection.query(query,(err,result)=>{
            if(err) return reject(err);
            resolve(result);
        });
    });
    }

    const detailsProduct=(id)=>{
        return new Promise((resolve,reject)=>{
            const query=`SELECT product.id,product.title,product.address,product.price,product.beds,product.baths,product.description,
            category.name,city.cityName,country.countryName FROM product,city,category,country
             where product.categoryId=category.id and product.cityId=city.id and product.countryId=country.id and product.id=?`;
            connection.query(query,[id],(err,result)=>{
                if(err) return reject(err);
                resolve(result[0]);
            });
        });
    }

    const update=(product)=>{
        const {id,title,address,price,categoryId,cityId,countryId,beds,baths,description}=product;
        return new Promise((resolve,reject)=>{
            const query=`UPDATE PRODUCT SET title=?,address=?,price=?,categoryId=?,cityId=?,countryId=?,beds=?,baths=?,description=? where id=?`;
            connection.query(query,[title,address,price,categoryId,cityId,countryId,beds,baths,description,id],(err,result)=>{
                if(err) return reject(err);
                resolve('Successfully update product');
            });
        });
    }




module.exports={
    getProductAllAdminPanel,
    getProductCategory,
    getProductImages,
    getTopListing,
    detailsProduct,
    cityProduct,
    update,
}