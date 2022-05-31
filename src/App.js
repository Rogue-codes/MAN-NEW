import LandingPage from "./Components/LandingPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import History from "./Components/History";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/history' element={<History/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
