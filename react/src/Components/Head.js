import React from 'react'
import './head.css'

export default function head() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row pt-6 height d-flex justify-content-center align-items-center" style={{paddingTop:"20px"}}>
          <div className="col-2">
          <a href=''> LOGO</a>
          </div>
          <div class="col-md-6">

            <div class="search d-flex">
              <i class="fa fa-search"></i>
              <input type="text" class="form-control" placeholder="Have a question? Ask Now" />
              <button class="btn btn-primary">Search</button>
            </div>

          </div>

          <div className="col-2">
          <a href=''> LOGO</a>
          </div> <div className="col-1">
          <button class="btn btn-primary">Login</button>
          </div>
          <div className="col-1">
          <a href=''> cart</a>
          </div>

        </div>
      </div>
      <div className="container-fluid bg-dark" id='navabr-2'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>


  )
}
