import LandingPage from "./Components/LandingPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
