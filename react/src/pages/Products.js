import React, { useEffect, useState } from 'react'
import UserHeader from '../headFoot/UserHeader'
import Productcart from './productscom/Productcart'
import Footer from '../headFoot/Footer';
import { BASE_URL } from '../services/helper';

export default function Products() {

  const token = sessionStorage.getItem('token');

  const [prod,setProd] =useState([]);
  
  
  
  useEffect(() =>{
   fetch(BASE_URL+'/product/getallproduct1',{
    headers: {
      'Content-Type': 'application/json',
     
        Authorization : `Bearer ${token}`

    }
   }
   
   )
   .then((res) => res.json())
   .then(resp => { setProd(resp)})
  }
 
  )
 




  return (
   <>
   <UserHeader/>

     <div className="container grid grid-filter-column"> 
     
     
     <div className=" col-md-3 col-12 top">
    


    </div>
   

   <section className='col-12 top col-md-9 '  >
    <div className="sort-filters"> 
    sorting 

      </div>

   <div className="d-flex flex-wrap  ">
   {prod.map((product) =><Productcart{...product} key={product.productid}/> )}
    
   


    </div>
    </section>
     </div>




   <Footer/>

  
   
   
   
   
   </>
  )
}
