import './App.css';
import {Routes,Route} from 'react-router-dom';
import TopNaavbar from './components/TopNavbar';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
 <TopNaavbar />
 <Routes>
   <Route exact path='/' element={ <Home />} />
   {/* <Route exact path='/about' element={  <About />} /> */}
 </Routes>
    
    </div>
  );
}

export default App;
