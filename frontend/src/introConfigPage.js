<<<<<<< HEAD:frontend/src/introConfigPage.js
import './buttonsAndTxtBxs.css';
=======
import { BrowserRouter, Routes, Route } from "react-router-dom"
>>>>>>> cd4c41becc890e257a0fafde7eb41daf23a721c3:frontend/src/App.js

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
            path='/'
            element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
