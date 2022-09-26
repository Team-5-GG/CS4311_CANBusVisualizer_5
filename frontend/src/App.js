import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroConfigPage from './introConfigPage';
import EditPacket from './editPacketData';
import { MainPage } from './Displayer';


function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<IntroConfigPage />}></Route>
                <Route exact path="/main" element={<MainPage />}></Route>
                <Route exact path="/editPacket" element={<EditPacket />}></Route>
            </Routes>
        </Router>
    );
    
}

export default App;

