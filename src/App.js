import LandingPage from "./Components/LandingPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import History from "./Components/History";
import WHoAreWe from "./Components/WHoAreWe";
import HowWeWork from "./Components/HowWeWork";
import WhereWeOperate from "./Components/WhereWeOperate";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/howWeWork' element={<WHoAreWe/>}/>
          <Route path='/whoWeAre' element={<HowWeWork/>}/>
          <Route path='/whereWeWork' element={<WhereWeOperate/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
