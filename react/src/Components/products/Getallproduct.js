import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../services/helper';







export default function Getallproduct() {

    
    const [products, setProducts] = useState([]);
    
   const token =sessionStorage.getItem('token');

    useEffect(() => {
        fetch(BASE_URL+'/product/getallproducts',{
            headers: {
                Authorization : `Bearer ${token}`
        }
        
        }

        )
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    // const handleDelete = (productId) => {
    // Update the product list by removing the deleted product

    //   setProducts(products.filter((product) => product.id !== productId));
    //};
    
    

    

    return (
        <>  
            <AdminHeader />
            <div className="" style={{ paddingTop: "90px" }}>
                <table className='table container border rounded-4  bg-white shadow box-area justify-content-center pl-1'>
                    <thead>
                        <tr class="table-success">
                            <th scope="col-1">ID</th>
                            <th scope="col-2">Name</th>
                            <th scope="col-4">Description</th>
                            <th scope="col-2">Price</th>
                            <th scope="col-1">Discount</th>
                            <th  scope="col-1">Edit</th>
                            <th scope="col-1">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.productid}>
                                <td>{product.productid}</td>
                                <td>{product.productname}</td>
                                <td>{product.discription}</td>
                                <td>{product.price}</td>
                                <td>{product.discount}%</td>
                                <td><Link to={`/product/update/${product.productid}`} 
                                class='btn btn-warning' >Edit</Link>                    </td>
                                <td >
                                 <button type='submit' class="btn btn-danger"
                                      onClick={(e) => {
                                        const url = `http://localhost:9090/product/delete/${product.productid}`;
                                        console.log(url)
                                        const conf = window.confirm('Are you sure you want to delete this');
                                       if(conf)                                         
                                        fetch(url, { 
                                            
                                            
                                            method: 'DELETE' ,
                                            headers: {
                                                Authorization : `Bearer ${token}`
                                        }
                                        
                                        
                                        }).then((response) => {
                                            if (!response.ok){
                                                toast.error("something error")}
                                                window.location.reload();
                                                
                                        })
                                        .catch((error) => {

                                             console.log(error)
                                        })
                                    }}
                                          > Delete</button>
                               
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>





            </div>


        </>

    )
}


{/*

onClick={(e) => {
                                        const url = 'http://localhost:9090/product/delete'
                                        console.log(url)
                                        fetch(url, { method: 'DELETE' }).then((response) => {
                                            if (!response.ok){
                                                toast.error("something error")}
                                                navigate("/product/showall")
                                        })
                                        .catch((error) => {

                                             console.log(error)
                                        })



                                    }}
*/}