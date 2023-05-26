import React from 'react'
import Dashboard from './Dashboard'
import Login from '../Components/Login'
import { Route, Routes } from 'react-router-dom'
import Registration from '../Components/registretion'
import Head from '../Components/Head'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Admin from '../Components/Admin'
import Pagenot from '../Components/Pagenot'
import Addproduct from '../Components/products/Addproduct'
import Getallproduct from '../Components/products/Getallproduct'
import UpdateProductForm from '../Components/products/Updateproduct'
import Products from './Products'
import ProductDetails from './ProductDetails'




export default function Home() {


   let token = sessionStorage.getItem('token');
   


  return (
    
<>


<Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/#' element={<Dashboard/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Registration/>}/>
    <Route path='/head' element={<Head/>}/>
    <Route path='/Admin' element={<Admin/>}/>
    <Route path='/product/add' element={<Addproduct/>}/>
    <Route path='/product/showall' element={<Getallproduct/>}/>
    <Route path='/product/update/:id' element={<UpdateProductForm/>}/>
    <Route path='*' element={<Pagenot/>}/>

</Routes>

</>
       
  )
}
