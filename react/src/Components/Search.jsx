import React, { useState } from 'react'

export const  SearchBar = ( {setResults} ) => {




 const[input,setInput]=useState("");
 const token = sessionStorage.getItem("token");
 const fetchData = (value) => {
  
  fetch("http://localhost:9090/product/getallproducts",{

  headers: {
    Authorization : `Bearer ${token}`
}
  }

  
  
  )
 .then((response) => response.json())
 .then((data) => {
     const results = data.filter((product) =>{
       return(
       value && product &&
        product.productname && 
        product.productname.toLowerCase().includes(value)
       );

     })
     setResults(results);
     console.log(results);

 })
 .catch((error) => {
     console.error(error);
 });
};
 const handleChange = (value) => {

setInput(value);
fetchData(value);

 };



  return (
    <form className="form-inline col-md-7 d-flex" id="nav-search">


  

    <input className="form-control me-2" type="search"
    
    value={input}
    onChange={(e) => handleChange(e.target.value)}
    
    placeholder="Search..." aria-label="Search" />
   <button className="btn btn-outline-success " type="submit"><span className="fa fa-search"></span></button>
    

</form>
  )
}
