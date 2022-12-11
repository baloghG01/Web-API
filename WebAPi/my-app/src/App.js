import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Employee } from './Employee';
import { Navi } from './Navi';
import { BrowserRouter } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className= "m-3 d-flex justify-content-center">
        ASd
      </h3>
      <Navi></Navi>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/employee' element={<Employee></Employee>}></Route>
      </Routes>
    
     
    </div>
    </BrowserRouter>
  );
}

export default App;
