import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AdminHeader from './AdminHeader';
import { useNavigate, useParams } from 'react-router-dom';

 function UpdateProductForm() {
    const navigate=useNavigate();
    const {id}= useParams();
  
      const [productname, setProductname] = useState('')
    const [discription, setDiscription] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [brand, setBrand] = useState('')
    const [image, setImage] = useState('')
    const token = sessionStorage.getItem('token');
    
    useEffect(() => {
        fetch('http://localhost:9090/product/update/'+id,{
          headers: {
            'Content-Type': 'application/json',
           
              Authorization : `Bearer ${token}`
      
          },
          
        }
        
        )
            .then((response) => response.json())
            .then((data) => {
                  setProductname(data.productname);
                  setDiscount(data.discount);
                  setImage(data.image);
                  setPrice(data.price);
                  setDiscription(data.discription);
                  setBrand(data.brand);

            })
            .catch((error) => {
                console.error(error);
            });
    }, []);



    
    
    const formsubmit = (e) => {
        e.preventDefault();


        let formobj = { productname, discription, price, discount,image }
        console.log(formobj);

    // Perform the update request

    fetch('http://localhost:9090/product/update/'+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
       
          Authorization : `Bearer ${token}`
  
      },
      body: JSON.stringify(formobj),
    })
      .then((response) => {
        console.log(response);
        
          if(response.status === 200) {
            toast.success('Updated product list')
             navigate('/product/showall')       

          }

      })
     
      .catch((error) => {
        console.error(error);
      });
 
    }
  return (
    <>
    <AdminHeader/>
            <br />
            <br /><br /><br /><br /><br /><br />
            <div className="container pt-50 col-md-5">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                    <div className="col-md-9 justify-content-center align-item-center">


                        <form className="validate-form" onSubmit={formsubmit}>
                            <h3 style={{ marginLeft: "80px" }} >Update product</h3>
                            <lable>Product Name</lable>
                            <div class="input-group mb-3 " >
                                
                                <input type="text" class="form-control form-control-lg bg-light fs-6 " name='productname'
                                    value={productname} onChange={(event) => { setProductname(event.target.value); }}
                                    placeholder="Product Name" />
                            </div>
                            <lable>Product Description</lable>
                            <div class="input-group mb-4">
                                <textarea class="form-control "
                                    value={discription} onChange={(event) => { setDiscription(event.target.value); }}
                                    placeholder="Product discription" id="exampleFormControlTextarea1" rows="3"></textarea>  </div>
                            <lable >Product Discount</lable>
                            <div class="input-group mb-4">
                                <input type="text" class="form-control form-control-lg bg-light fs-6 " name='discription'
                                    value={discount} onChange={(event) => { setDiscount(event.target.value); }}
                                    placeholder="Product Discount" />
                            </div>
                            <lable>Product Price</lable>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg bg-light fs-6 " name='price'
                                    value={price} onChange={(event) => { setPrice(event.target.value); }}
                                    placeholder="Product price" />
                            </div>
                            <lable>Product brand</lable>
                            <div class="input-group mb-3">
                                <input type="select" class="form-control form-control-lg bg-light fs-6 " name='brand'
                                    value={brand} onChange={(event) => { setBrand(event.target.value); }}
                                    placeholder="Product brand" />
                            </div>

                            <lable>Product Image</lable>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg bg-light fs-6" name='discount'
                                    value={image} onChange={(event) => { setImage(event.target.value); }}
                                    placeholder="images" />                            
                                    </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-lg btn-primary w-100 fs-6" type="submit"  >Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
      </>
    
    );
};

export default UpdateProductForm;
