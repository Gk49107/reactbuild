import React, { useEffect, useState } from 'react'
import { SearchBar } from '../Components/Search';
import { SearchResults } from '../Components/SearchResults';
import { useNavigate } from 'react-router-dom';




export default function UserHeader() {
    const [results, setResults] = useState([])
    const [logout, setLogout] = useState(false);
  const navigate= useNavigate()

    useEffect(() => {
      if (!localStorage.getItem('user')) {
          navigate("/login")
      }

  })
    const logouthandler = e => {
        localStorage.removeItem('user');
        sessionStorage.removeItem('token');
        setLogout(true);
    
      }
  return (
    <>
    <div className="fixed-top justify-content-center">
    <nav className="navbar navbar-light bg-light   ">
     
<a className="navbar-brand col-md-1 ">Navbar</a>
<SearchBar  setResults={setResults}/>
<a href='#' ><span className=""><i className='fa fa-shopping-cart'  ></i></span> </a> 
<button className="btn btn-success col-md-1" onClick={logouthandler}>Logout</button>

</nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
  <div className="navbar-nav">
    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
    <a className="nav-item nav-link" href="#">Features</a>
    <a className="nav-item nav-link" href="#">Pricing</a>
    <a className="nav-item nav-link" href="#">Features</a>
    <a className="nav-item nav-link" href="#">Features</a>
    <a className="nav-item nav-link" href="#">Features</a>
    <a className="nav-item nav-link" href="#">Features</a>
    <a className="nav-item nav-link disabled" href="#">Disabled</a>
  </div>
</div>
</nav>

</div>
<SearchResults  results={results}/>
    </>  
  
    )
}
