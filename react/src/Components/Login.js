import React, { useEffect, useState } from 'react'
import image from "../videos/welco.jpg"
import google from "../videos/123.jpg"
import './login.css'
import { useNavigate } from 'react-router-dom';
import { emailvalidator, passwordvalidator } from './rejects';
import { toast } from 'react-toastify';
import { BASE_URL } from '../services/helper';


export default function Login() {
    const navigate = useNavigate();
    const [userName, setUsername] = useState("");
    const [userPassword, SetPassword] = useState("");
 

    function click() {
        // toggle the type attribute
        const togglePassword = document.querySelector("#togglePassword");
        const passwordV = document.querySelector("#password_field");
             const type = passwordV.getAttribute("type") === "password" ? "text" : "password";
        togglePassword.className === 'fa fa-eye viewpass mr-4 text-muted' ? document.getElementById("togglePassword").className = 'fa fa-eye-slash viewpass mr-4 text-muted' : document.getElementById("togglePassword").className = 'fa fa-eye viewpass mr-4 text-muted';
        passwordV.setAttribute("type", type);

    }

 

    {/*  useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/signup");
        }
    }) */}
    const Isvalidate = () => {
        let isproceed = true;
        let errormessage = "please enter"
        const validate = emailvalidator(userName)
        console.log(validate)
        const validatepass = passwordvalidator(userPassword)
        console.log(validatepass)
        if (validate === false) {
            isproceed = false;
            errormessage += "vaild email address"
        }
        if (validatepass === false) {
            isproceed = false;
            errormessage += " vaild password(1-8character include A-Z a-z 0-9 @#$%^&*() )"
        }
        if (!isproceed) {
            toast.error(errormessage);
        }
        return isproceed;
}

useEffect(() => {
 if(localStorage.getItem('user')){
    navigate("/")
 } 
 if(localStorage.getItem('Admin')){
    navigate("/Admin");
 }    

})



    const formsubmit = (e) => {
        e.preventDefault();
        if (Isvalidate()) {
            let formobj = { userName, userPassword }
            console.log(formobj)

            fetch(BASE_URL+"/authenticate", {
                method: "POST",
                body: JSON.stringify(formobj),
                headers: {
                    "content-type": "application/json",
                    "Accept": "application/json"
                }
            }).then(function (response) {
                console.log(response);
                return response.json();            
            }).then(function(user){
                console.log(user);

            

              
                if(user.jwtToken != null)
                {
                
                 console.log(user.jwtToken) 
                 toast.success("success");
                 sessionStorage.setItem("token", user.jwtToken);   
                 const role = user.user.role[0].roleName;       
            
             if( role ==="Admin")
              {
                localStorage.setItem("Admin",true)
                toast.success("success admin login");
                window.location.reload();
                
              }              
            if (role ==="User"){
                localStorage.setItem("user",true)
                localStorage.setItem("data",user.user.userName)
                toast.success("success admin login");
                window.location.reload();
            }}
              else {
                 toast.error("invalid username or password");


              }
         
            
            }).catch((error) => {
                   toast.error(error.message)
            });
        }
    }
 
     






    return (
        <div class="container col-8 d-flex justify-content-center align-items-center " id='login'>
            <div class=" row border rounded-4  bg-white shadow box-area justify-content-center pl-1">
                <img src={image} class="img-fluid  rounded-4 d-flex justify-content-center align-items-center flex-column left-box " alt="..." style={{ width: '40%', height: '20%' }} />
                <div class="col-md-6 right-box">
                    <div class="row align-items-center">
                        <div class="header-text mb-4">
                            <h2>Hello,Again</h2>
                            <p>We are happy to have you back.</p>
                        </div>

                        <form className="validate-form" onSubmit={formsubmit}>

                            <div class="input-group mb-3">
                                <input type="text" class="form-control form-control-lg bg-light fs-6 " name='email'
                                    value={userName} onChange={(event) => { setUsername(event.target.value); }}
                                    placeholder="Email address" />
                            </div>

                            <div class="input-group mb-1">
                                <input type="password" class="form-control form-control-lg bg-light fs-6" name='password'
                                    value={userPassword} onChange={(event) => { SetPassword(event.target.value); }}
                                    placeholder="Password" />
                                    <button class="btn viewpass mr-4 text-muted btn-light fs-6" onChange={click}>
                                    
                                    <i class="fa fa-eye"></i>
                                    </button>
                                   
                                  
                            </div>
                            <div class="input-group mb-5 d-flex justify-content-between">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="formCheck" />
                                    <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
                                </div>
                                <div class="forgot">
                                    <small><a href="#">Forgot Password?</a></small>
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-lg btn-primary w-100 fs-6" type="submit"  >Login</button>
                            </div>
                            <div class="input-group mb-3">
                                <button class="btn btn-lg btn-light w-100 fs-6"><img src={google} style={{ width: 20 }} class="me-2" /><small>Sign In with Google</small></button>
                            </div>
                            <div class="row">
                                <small>Don't have account? <a href="#" onClick={() => navigate("/signup")}   >Sign Up</a></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}


{/*  




                if(user.user.role[0].roleName=== 'Admin'){
                    navigate("/Admin")
                    console.log('youre admin');
                    toast.success("your role has been admin");
                    localStorage.setItem('Admin',true)
             }
               else if(user.user.role[0].roleName=== 'User') {
                    navigate("/")
                    toast.success("your normal user")
                    localStorage.setItem('user',true)
             
                } 
              
              else
               {
                    toast.error("invaid email or password")
                }







async function login()  {
       if( !emailvalidator(email) ){
        return setErroremail("Please enter vaild email address");
       } 
       if( !passwordvalidator(password) ){
        return setErrorpass("Please enter vaild password(1-8character include A-Z a-z 0-9 @#$%^&*() )");
       }  
        const validate =  emailvalidator(email) 
        console.log(validate)
        const validatepass = passwordvalidator(password)
        console.log(validatepass)

        
        let item = {email, password}
        console.warn(item)

        let result = await   fetch ("http://localhost:8085/rpl/login",{
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "content-type": "application/json",
              "Accept": "application/json"
            }
    })        
   result = await result.json();
   console.warn(result);
   if (result.status===true){
    navigate("/")
   }
else {
    alert(result.message);
}
  //localStorage.setItem(JSON.stringify(result))
} */}

//  onChange={(event) => { setEmail(event.target.value); }}
// onChange={(event) => { SetPassword(event.target.value); }}