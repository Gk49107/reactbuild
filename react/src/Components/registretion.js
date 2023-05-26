import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from "../videos/23.jpg"
import google from "../videos/123.jpg"
import './login.css'
import { emailvalidator, passwordvalidator } from './rejects';
import { toast } from 'react-toastify';



export default function Registration() {
  const navigate = useNavigate();
  const [userName, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [confirmpass, setconfirmpass] = useState('')
  const [errormessage, setErrormessage] = useState('')


const Isvalidate = () =>
{  
  let isproceed=true;
   let errormessage ="please verify"
  const validate =  emailvalidator(email) 
  
  const validatepass= passwordvalidator(userPassword)
  if(userName===null||userName==='')
  {
    isproceed = false;
    errormessage += " username"
  }
  if(!validate){
    isproceed=false;
    errormessage +="enter valid  email address"
  }
  if(!validatepass){
    isproceed=false;
    errormessage +="enter valid password"
  }
  if(confirmpass!=userPassword){
   
    isproceed=false
    errormessage +="enter confirm password same as password"
   
  }
  if(!isproceed){
    toast.error(errormessage )
  }

return isproceed;
}

useEffect(() => {
  if(localStorage.getItem('user')){
     navigate("/")
  }  
  if(localStorage.getItem('Admin')){
    navigate("/Admin")
 }    
 
 })

const formsubmit = (e)=>
{ e.preventDefault();
  console.log(Isvalidate())
  if(Isvalidate()){
let formobj ={userName,email,userPassword}
console.log(formobj)
  
 fetch ("http://localhost:9090/registerNewUser", {
  method: "POST",
  body: JSON.stringify(formobj),
  headers: {
    "content-type": "application/json",
    "Accept": "application/json"
  }
}).then((result) =>
{  
  toast.success('Registered successfully')
  navigate("/login")
}).catch((error) =>{
  toast.error(error.message)
});

  }
}
 
  
  
  
  return (
    <div class="container col-8 d-flex justify-content-center align-items-center " id='login'>
      <div class=" row border rounded-4 pb-4 bg-white shadow box-area justify-content-center ">
        <img src={image} class="img-fluid  rounded-4 d-flex justify-content-center align-items-center flex-column left-box " alt="..." style={{ width: '40%', height: '30%' }} />
     <div class="col-md-6 right-box">
          <div class="row align-items-center">
            <div class="header-text mb-4">
              <h2>Hello,Again</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form class="validate-form" onSubmit={formsubmit}>
            <div class="input-group mb-3">
              <input type="text" class="form-control form-control-lg bg-light fs-6"
               value={email} onChange={(event) => { setEmail(event.target.value); }}
                placeholder="Username" />
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control form-control-lg bg-light fs-6"
               
                value={userName} onChange={(event) => { setEmployeename(event.target.value); }}
                placeholder="Email address" />
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control form-control-lg bg-light fs-6"
                value={userPassword} onChange={(event) => { setPassword(event.target.value); }}
                placeholder="Password" />
            </div>
            {errormessage.length > 0 && <div style={{ marginBottom: "1px", color: "red" }} color='red'>{errormessage}</div>}
            <div class="input-group mb-3">
              <input type="password" class="form-control form-control-lg bg-light fs-6" 
              value={confirmpass} 
              onChange={(event) => { setconfirmpass(event.target.value); }}
              placeholder="Confirm Password" />
           </div>

            <div class="input-group mb-3">
              <button class="btn btn-lg btn-primary w-100 fs-6" type='submit' >signup</button>
            </div>
            <div class="input-group mb-3">
              <button class="btn btn-lg btn-light w-100 fs-6"><img src={google} style={{ width: 20 }} class="me-2" /><small>Sign up with Google</small></button>
            </div>
            <div class="row">
              <small>Do you have account? <a href="#" onClick={() => navigate("/login")}   >Sign in</a></small>
            </div>
        </form>  
        </div>
        
        </div>
        
      </div>

    </div>
  )
}

{/*async function save() {
  let item = { employeename, email, password }
  console.warn(item)
  let result = await fetch("http://localhost:8085/rpl/add", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "content-type": "application/json",
      "Accept": "application/json"
    }


  })
  result = result.json()
  console.warn("result", result)
}

*/}
{/*async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://localhost:8090/rpl/add",{

        username: username,
        email: email,
        password: password


      });
      alert("Success");
      setUsername("");
      setEmail("");
      setPassword("");

    }
    catch (err) {
      {
        alert("failed");
      }
    }
  }

*/}
//value={employeename} onChange={(event) => { setEmployeename(event.target.value); }}
//value={email} onChange={(event) => { setEmail(event.target.value); }}
//  onChange={(event) => { setconfirmpass(event.target.value); }}
//value={password} onChange={(event) => { setPassword(event.target.value); }}