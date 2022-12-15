
import './App.css';

import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';

import {Login} from './Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Welcome
     </h3>

     

     <Routes>
       <Route path='/' element={<Home></Home>} exact/>
       <Route path='/login/' element={<Login></Login>}></Route>
       <Route path='/department' element={<Department></Department>}/>
       <Route path='/employee' element={<Employee></Employee>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
