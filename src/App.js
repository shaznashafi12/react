// import logo from './logo.svg';
// import './App.css';
// import Demo from './Demo';
// import Home from './home';
// import Him from './Him';
// // import './form.css';
// import Navbar from './Navbar';
// // import './nav.css';
// import Mapping from './Mapping';
// import './mapping.css'
// import Parent from './pages/Parent';
// import './pages/parent.css'
// import Tail from './pages/Tail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Form from './pages/Form';
// import Bg from './pages/Bg';
// import Submit from './pages/Submit';
import Todo from './pages/Todo';
import Datafetch from './pages/Datafetch';
import Fetdata from './pages/Fetdata';
import Themeprovider from './pages/Themeprovider';
import Bgchng from './pages/Bgchng';

function App() {
  return (
    <div className="App">
      <Themeprovider>
     <BrowserRouter>
     <Routes>
      {/* <Route path='/' element={<Parent/>}></Route>
      <Route path='/demo' element={<Tail/>}></Route> */}
      {/* <Route path='/ff' element={<Form/>}></Route> */}
      <Route path='/' element={<Bgchng/>}></Route>

     </Routes>
     </BrowserRouter>
     </Themeprovider>
    </div>
  );
}

export default App;
