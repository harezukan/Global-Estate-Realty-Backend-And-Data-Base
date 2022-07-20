const mysql=require('mysql');


const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'real_estate_agency'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Successfully connect');
})

module.exports=conn;