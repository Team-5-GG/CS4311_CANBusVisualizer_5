import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroConfigPage from './introConfigPage';
import EditPacket from './editPacketData';
import DevComLogo from './DevComLogo';
import { MainPage } from './Displayer';
import SyncProject from './syncProject';


function App(){
    return(
        <Router>
            <DevComLogo/>
            <Routes>
                <Route exact path="/" element={<IntroConfigPage />}></Route>
                <Route exact path="/main" element={<MainPage />}></Route>
                <Route exact path="/editPacket" element={<EditPacket />}></Route>
                <Route exact path="/syncProject" element={<SyncProject />}></Route>
            </Routes>
        </Router>
    );
}

export default App;

