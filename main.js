const express=require('express');
const app=express();
const cors=require('cors');
const PORT=3000;


const { registerUser, loginUser,getAllUsers,personalProfile,updateUserPage } = require('./controller/User.controller');
const {  getAllCategories} = require('./controller/Category.controller');
const {  getAllCities} = require('./controller/City.controller');
const {  getAllCountry} = require('./controller/Country.controller');
const {  save} = require('./controller/Add-Products.controller');
const {  getAllProductsAdmin,getCategory,getAllProductImage,topListings,getDetailsProduct,getCityProduct,updateProduct,} = require('./controller/Product.controller')
const {  deletePro} = require('./controller/deleteProduct.controller')
const{contactForm,contactForms,contactPage,deleteContactForm}=require('./controller/Contact.controller')
const { saveProductImage } = require('./controller/SaveImage.controller')

app.use(express.json());
app.use(cors());



app.post('/user/register',registerUser)
app.post('/user/login',loginUser)
app.get('/',getAllCities)
app.get('/user/all',getAllUsers)

app.get('/category/all',getAllCategories);
app.get('/city/all',getAllCities);
app.get('/country/all',getAllCountry);
app.post('/product',save)
app.get('/product/all',getAllProductsAdmin);
app.delete('/admin-panel/update_delete/:id',deletePro)
app.get('/product/:id',getCategory)
app.get('/product-image/all/:id',getAllProductImage)
app.get('/popularProduct',topListings)
app.get('/details/:id',getDetailsProduct)
app.post('/contact',contactForm)
app.post('/contact-page',contactPage)
app.get('/contactForm/all',contactForms)
app.get('/product-city/:id',getCityProduct)
app.delete('/admin-panel/contact/:id',deleteContactForm)
app.post('/product-image',saveProductImage)
app.put('/update-product',updateProduct)
app.get('/user-profile/:id',personalProfile)
app.put('/update-profile',updateUserPage)






app.listen(PORT,()=>{
    console.log(`App started on port:${PORT}`);
})