
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/react-fontawesome'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';


function App() {
  return (
    
   
   
    <div className="App">
      <ToastContainer theme='colored' style={{marginTop:"100px"}}></ToastContainer>
      <Router/>
      
      
    </div>
   
   
  );
}

export default App;
