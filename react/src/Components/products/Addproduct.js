import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AdminHeader from './AdminHeader';
import { BASE_URL } from '../../services/helper';

function Addproduct() {
    const [productname, setProductname] = useState('')
    const [discription, setDiscription] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [category1, setCategory1] = useState([])
    const [categoryid, setCategoryid] = useState()
    const [brand, setBrand] = useState('')
    const [image, setImage] = useState('')
    console.log(categoryid);

    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('Admin')) {
            navigate("/login")
        }

    })
    const logouthandler = e => {
        localStorage.removeItem('Admin');
        setLogout(true);

    }
    const token = sessionStorage.getItem('token');
    const formsubmit = (e) => {
        e.preventDefault();
             
        

        let formobj = { Productname : productname, discription, price, discount, image, brand, categoryid }
        console.log(formobj)
         

        fetch( BASE_URL+"/product/add", {
            method: "POST",
            body: JSON.stringify(formobj),
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
                Authorization : `Bearer ${token}`
            }
        }).then((result) => {
            toast.success('product added successfully')
            navigate("/admin")
        }).catch((error) => {
            toast.error(error.message)
        });


    }

    useEffect(() => {
        fetch(BASE_URL+'/product/getallcategory',{
            method: "GET",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
            Authorization : `Bearer ${token}`
        }
        
     } )
            .then((response) => response.json())
            .then((data) => {
                setCategory1(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);






    return (
        <>

            <AdminHeader />
            <br />
            <br /><br /><br /><br /><br /><br />
            <div className="container pt-50 col-md-5">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                    <div className="col-md-9 justify-content-center align-item-center">


                        <form className="validate-form" onSubmit={formsubmit}>
                            <h3 style={{ marginLeft: "100px" }} >Add product</h3>
                            <div class="input-group mb-3 " >
                                <input type="text" class="form-control form-control-lg bg-light fs-6 " name='productname'
                                    value={productname} onChange={(event) => { setProductname(event.target.value); }}
                                    placeholder="Product Name" />
                            </div>
                            <div class="input-group mb-3">
                                <textarea class="form-control "
                                    value={discription} onChange={(event) => { setDiscription(event.target.value); }}
                                    placeholder="Product discription" id="exampleFormControlTextarea1" rows="3"></textarea>  </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg bg-light fs-6 " name='discription'
                                    value={discount} onChange={(event) => { setDiscount(event.target.value); }}
                                    placeholder="Product Discount" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg bg-light fs-6 " name='price'
                                    value={price} onChange={(event) => { setPrice(event.target.value); }}
                                    placeholder="Product price" />
                            </div>
                            <div class="input-group mb-3">
                                <input type="select" class="form-control form-control-lg bg-light fs-6 " name='brand'
                                    value={brand} onChange={(event) => { setBrand(event.target.value); }}
                                    placeholder="Product brand" />
                            </div>
                           
                            <div class="input-group mb-3">
                          
                                <select class="form-select" aria-label="Default s" 
                                  value={categoryid} onChange={(event) => { setCategoryid(event.target.value) }}
                                     >
                                     
                                    <option selected >Select Product Category</option>
                                    {category1.map((category) =>(  
                                    <option  key={category.categoryid}  value={category.categoryid} >{category.name}</option>
                                    ) )}
                                </select>
                              

                            </div> 



                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg bg-light fs-6" name='discount'
                                    value={image} onChange={(event) => { setImage(event.target.value); }}
                                    placeholder="images" />



                            </div>

                            <div class="input-group mb-3">
                                <button class="btn btn-lg btn-primary w-100 fs-6" type="submit"  >Add Product</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Addproduct;