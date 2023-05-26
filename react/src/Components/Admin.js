
import React, { useEffect, useState } from 'react'



import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import AdminHeader from './products/AdminHeader';


export default function Admin() {


    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();
    const notify = () => toast("Wow so easy!");
    useEffect(() => {
        if (!localStorage.getItem('Admin')) {
            navigate("/login")
        }

    })
   
  




    return (
        <>
           <AdminHeader/>
          
            <br/>
            <br/><br/><br/><br/><br/><br/>
          <div className="container pt-122">
            <button onClick={notify}>Admin</button>
           </div>
           <div className="container pt-50 col-md-9 d-flex">
            <div className="container pt-50 col-md-2">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                <div className="col-md-8 justify-content-center align-item-center">
                    All orders are available

                    </div>

                  
                 </div></div>
                 <div className="container pt-50 col-md-2">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                   
                        All user
                   
                 </div></div>
                 <div className="container pt-50 col-md-2">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                    All products
                 </div></div>
                 <div className="container pt-50 col-md-2">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                    
                        All Catogary Services

                    
                 </div></div>
                 </div>
                 <div className="container pt-50 col-md-9 d-flex">
            <div className="container pt-50 col-md-2">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                    <div className="col-md-8 justify-content-center align-item-center">
                    All orders are available

                    </div>
                 </div></div>
                 <div className="container pt-50 col-md-2">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                    <div className="col-md-2 justify-content-center align-item-center">
                        product2

                    </div>
                 </div></div>
                 <div className="container pt-50 col-md-2">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                    <div className="col-md-2 justify-content-center align-item-center">
                        product3

                    </div>
                 </div></div>
                 <div className="container pt-50 col-md-2">
                <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1" style={{ paddingTop: "20px", paddingBottom: "30px ", marginBottom: 30 }}>
                    <div className="col-md-2 justify-content-center align-item-center">
                        product4

                    </div>
                 </div></div>
                 </div>
                

   
                

        </>
    )
}
