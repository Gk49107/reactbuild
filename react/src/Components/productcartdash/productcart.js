import React from 'react'
import '../../pages/pages.css'

export default function Productcart() {
  return (
     <>
       <div className="container pt-50 col-6  col-md-3">
            <div class=" row border rounded-1  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
              <div className="col-md-12 justify-content-center align-item-center">
              <img  class="img-fluid img-thumbnail" src="https://cdn.shopify.com/s/files/1/2102/3501/products/LBX3289_700x.jpg?v=1683884639"  alt=''/>
            
           
               
               <div className='mt-10 mb-10' >
                <span className='' style={{color:"red",fontSize:'20px'}}> Rs.5692 </span>
               </div>
               <div className='mt-10 mb-10' >
                <span className='inside-content' style={{color:"black", fontSize:'15px'}}>Pure banarasi tussar silk saree green and dark grey with thread & zari woven buttas and woven border </span>
               </div>
               <div className='mt-10 mb-10' >
                <span className='' style={{color:"red",fontSize:'15px'}}> &#x2022;  Only  1  unit  left</span>
               </div>
               <div className='mt-10 mb-10' >
                <button className="btn w-100 fs-6  bg-success"> Add to cart </button>
               </div>
             
             
             
             
              </div>
            </div></div>

     
     </>


   
  )
}
