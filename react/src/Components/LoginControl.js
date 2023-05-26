
import React from "react";




class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
   



    handleLoginClick() {
      this.setState({isLoggedIn: true});
     
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
      
      return (
        <div>
        
          {button}
        </div>
      );
    }
  }
export default LoginControl;

  function LoginButton(props) {
    return (
      <button className="btn btn-success"   onClick={props.onClick }>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      
      <button className="btn btn-success" onClick={props.onClick}>
        Logout
      </button>
    );
  }