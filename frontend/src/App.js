import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroConfigPage from './introConfigPage';
import EditPacket from './editPacketData';


function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<IntroConfigPage />}></Route>
                <Route exact path="/edit" element={<EditPacket />}></Route>
            </Routes>
        </Router>
    );
}

export default App;

