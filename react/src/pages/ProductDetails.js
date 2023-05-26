import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserHeader from '../headFoot/UserHeader';
import Footer from '../headFoot/Footer';
import { BASE_URL } from '../services/helper';

export default function ProductDetails() {

const params = useParams();
const [prod,setProd] =useState([]);
const token = sessionStorage.getItem('token');
const userid =localStorage.getItem('data');

const productid = params.id
useEffect(() =>{
 fetch(BASE_URL+'/product/get/'+productid ,{
 headers: {
 
    Authorization : `Bearer ${token}`

}
})
 .then((res) => res.json())
 .then(resp => { setProd(resp)})
}

)

const addtocart = (e) => {
  e.preventDefault();

let data = {productid,userid }

  console.log(data)

  
}




const img = prod.image


  return (
<>
    <UserHeader/>
     <section className='container top d-flex'>
      <div className='col-12 col-md-6'>
      <img src={img} alt=""></img>
      </div>
      
      <div className='col-12 col-md-6'>
              <div className="">{prod.discount}</div>
      <div className="">{prod.discription}</div>
      <div className="">

        <button type="button" className="btn btn-warning"  onClick={addtocart}  >Add to cart  </button>
      </div>
      </div>


     </section>

  <Footer></Footer>






    </>
  )
}
