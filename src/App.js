import Navbar from './componants/Navbar';
import Home from './componants/Home';
import Dennis from './componants/dennis';
import './App.css';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Aboutus from './componants/Aboutus';
import ServicesArea from './componants/ServicesArea';
// import ServicesArea from './componants/ServicesArea';

function App() {
  return (
    <>
      <div className='mainapp'>
        <div className="RouterDiv">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<Aboutus/>}/>
              <Route path='/services' element={<ServicesArea/>}/>
              <Route path='/contact' element={<Dennis/>}/>
              {/* <Route path='/dennis' element={<Dennis/>}/> */}
            </Routes>
          </Router>
        </div>
      </div >
    </>
  );
}
export default App;
