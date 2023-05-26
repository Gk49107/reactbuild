import React, { useEffect} from 'react'
import Productcart from '../Components/productcartdash/productcart';



import { Link, useNavigate } from 'react-router-dom';

import './pages.css'


import Product2 from './dashcomponent/Product2';
import UserHeader from '../headFoot/UserHeader';
import Footer from '../headFoot/Footer';

export default function Dashboard() {


  


  const navigate = useNavigate();
 
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate("/login")
    }

  })
 


  return (

    <>
   
      <UserHeader/>




      <div className="container-fluid top">


        <div className='container-fluid '>

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="First slide" />
              </div>
              <div className="carousel-item ">
                <img className="d-block w-100" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>



        <Link className=' d-flex wrapper ' to={"/Products"}>

         <Productcart className="item " /> 
         <Productcart className="item"/> 
         <Productcart className="item"/> 
         <Productcart className="item"/> 
         <Productcart className="item"/> 
         <Productcart className="item"/> 
         <Productcart className="item"/> 
         <Productcart className="item"/> 
         <Productcart className="item"/> 
       </Link>

       <div className=''>
       <h3>pure kanjivaram collection</h3>
               </div>

       <div className=' d-flex wrapper2 '>
        <Product2 className="item"/>
        <Product2 className="item"/>
        <Product2 className="item"/>
        <Product2 className="item"/>
        <Product2 className="item"/>
        <Product2 className="item"/>
        <Product2 className="item"/>

        
        </div>





      </div>
  <Footer/>

    </>
  );

}
