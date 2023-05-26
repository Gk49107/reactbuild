import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{ SearchBar} from '../Search';
import { SearchResults } from '../SearchResults';



export default function AdminHeader() {
    const [logout, setLogout] = useState(false);

const [results, setResults] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('Admin')) {
            navigate("/login")
        }

    })
    const logouthandler = e => {
        localStorage.removeItem('Admin');
        sessionStorage.removeItem('token');
        setLogout(true);

    }
return (
    <>   
    
    <SearchResults results={results} />
     <nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark d-flex " >
        <div className="container-fluid pt-3 pb-3">
                    <div className="row">
                        <SearchBar setResults={setResults}/>
                        
                    </div>
                    <button className="btn btn-success" onClick={()=> navigate('/product/add')}>Addproduct</button>
                    <button className="btn btn-success" onClick={()=> navigate('/Admin')}>Home</button>
                    <button className="btn btn-success" onClick={()=> navigate('/product/showall')}>Show All products</button>
                    <button className="btn btn-success" onClick={logouthandler}>Logout</button>
                </div>
            </nav>
            </>
  )
}
