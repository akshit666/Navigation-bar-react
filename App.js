import logo from './logo.svg';
import './App.css';
import Greet from './components/CV/Greet';
import Welcome from './components/CV/Welcome'
import Hello from './components/CV/Hello'
import StateComponent from './components/CV/StateComponent'
import State from './components/Hooks/State';
import Form from './components/Hooks/Form';
import Effect from './components/Hooks/Effect';
import A from './components/Hooks/A';
// import News1 from './components/Hooks/api/News1';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
// import Home from './components/Harry/Home';
// import Blogs from './components/Harry/Blogs';
// import Contact from './components/Harry/Contact';
// import Error from './components/Harry/NoPage';
// import {Navbar} from './components/Harry/Navbar1';
import Contactus from './components/CV/Practice/Contactus';
import Images from './components/CV/Practice/Images';
import Navigation from './components/CV/Practice/Navigation';
import Home from './components/CV/Practice/Home';
import Error from './components/CV/Practice/Error';
import Imageee from './components/Imageee';




const App = () => {
  return (
    <>
      {/* <Greet name = 'Don'/>
      <Greet name = ' ok'/>
      <Greet name = ' bye'/> */}
      {/* <Welcome/>
      <Hello/> */}
      {/* <StateComponent/> */}
      {/* <State/> */}
      {/* <Form/> */}
      {/* <Effect/> */}



      {/* <News1/> */}
      {/* <Router>
      <Routes>
        <Route  path = "/" element = {<Navbar />}>
          <Route index element = {<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
      </Router> */}
      
      {/* ******************************************************************************************* */}
 {/* <Router>
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element = {<Home/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path='/images' element={<Images/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  </Routes>
 </Router> */}
 <Imageee/>
    </>
  ) 
}

export default App;

