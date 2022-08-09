
import './App.css';

// import News1 from './components/Hooks/api/News1';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import Contactus from './components/CV/Practice/Contactus';
import Images from './components/CV/Practice/Images';
import Navigation from './components/CV/Practice/Navigation';
import Home from './components/CV/Practice/Home';
import Error from './components/CV/Practice/Error';





const App = () => {
  return (
    <>

 <Router>
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element = {<Home/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      <Route path='/images' element={<Images/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  </Routes>
 </Router>

    </>
  ) 
}

export default App;

