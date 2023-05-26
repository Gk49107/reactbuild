import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Productcart(props) {
    const navigate = useNavigate();
    const img = props.image
    



    


  return (
    <>
    <div className="container pt-50 col-12 col-sm-6 col-md-3 p-4 cursor-pointer" role='button'  onClick={()=> navigate(`/product/${props.productid}`)}>
         <div className=" row border rounded-1  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
           <div className="col-md-12 justify-content-center align-item-center">
           <img  className="img-fluid img-thumbnail" src={img}  alt=''/>
         
        
            
            <div className='mt-10 mb-10' >
             <span className='' style={{color:"red",fontSize:'20px'}}> Rs. {props.price} </span>
            </div>
            <div className='mt-10 mb-10' >
             <span className='inside-content' style={{color:"black", fontSize:'15px'}}> {props.discription} </span>
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
