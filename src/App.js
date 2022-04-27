import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';  
import { School} from './School'
import { College } from './College';
import { AuthProvider } from './Auth';
import './App.css';

function App() {
  return ( 
    <AuthProvider>
    <div className ="header">
     <div className="bor"> 
    <Navbar/>
   
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='About' element={<About/>}/>
       <Route path='Profile' element={<Profile/>}/>
       <Route path='School' element={<School/>}/>
       <Route path='College' element={<College/>}/>
  
   </Routes>
   </div>
   </div>
   </AuthProvider>
  );
}

export default App;
