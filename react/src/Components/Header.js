import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Header(props) {

    const navigate=useNavigate();

 


    

    useEffect(() => {
      if(localStorage.getItem('user')){
       
     }    
    })
   
    

    



  return (
    <nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark d-flex " >
 
      
    <div className="container-fluid pt-3 pb-3">
   
    <div className="row">
    
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
  
 
    </div>
      
            <button className="btn btn-success"   onClick={() => navigate("/login")}>Login</button> 
         
          
    
    


</div>
</nav>
  )
}

