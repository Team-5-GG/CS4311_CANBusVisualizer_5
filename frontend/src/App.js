import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import introConfigPage from './introConfigPage';
import editPacket from './editPacketData';


function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/">
                    <introConfigPage />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

