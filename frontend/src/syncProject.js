// import ProgressBar from './components/ProgressBar';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const syncProject = () => {
    return(
        <body className='syncBody'>
            <Link to="/">
                <button type="button" className="close-button"></button>
            </Link>
            <header className="App-header">
                Sync
            </header>
            {/* Calling the progress bar function */}
            <ProgressBar/>
            {/* Computer 1 */}
            <div id='computer-1'>
                <img src={require('./images/sync-page/computer.png')} width="350" height="350"/>
            </div>
            {/* Computer 2 */}
            <div id='computer-2'>
                <img src={require('./images/sync-page/computer.png')} width="350" height="350"/>
            </div>
        </body>
    )
    // This function acts as a holder method for the progressbar components
    function ProgressBar(){
        const [filled, setFilled] = useState(0);
        const [isRunning, setIsRunning] = useState(false);
        useEffect(()=> {
            if(filled < 100 && isRunning){
                setTimeout(()=> setFilled(prev => prev += 2), 50)
            }
        },[filled, isRunning])
        return(
            <div>
                <div className='progressBar'>
                    <div style={{
                        height: "100%",
                        width: `${filled}%`,
                        backgroundColor: "#a66cff",
                        transition: "width 0.5s"
                    }}></div>
                    <span>{filled}%</span>
                </div>
                <button class='syncInputBoxes' id='runBtn' onClick={() => setIsRunning(true)}>Run Sync</button>
                <button class='syncInputBoxes'>Exit Sync</button>
            </div>
        )
    }
}
export default syncProject;