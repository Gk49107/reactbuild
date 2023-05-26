import React from 'react'

export const SearchResults = ({results}) => {


function handleSearch(id)
{
    alert('Search Result '+id);
}



  return (
    <div className='results-list' >
    {
        results.map((result ,id ) => {
         return <div key={id} onClick={() =>{handleSearch(`${result.productid}`)}} >{result.productname}  </div> 




        })
    }
    
    
    
    </div>

  )
}
