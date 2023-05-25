
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';


function App() {
 
  return (
   < >
  <Home></Home>
  <br>
  </br>
  <br></br>
  
  <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/add" element={<AddContact/>} />
      <Route path="/edit/:id" element={<EditContact/>} />
    </Routes>
  
    </>
  );
}

export default App;
