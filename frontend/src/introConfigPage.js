import React , { Component}  from 'react';
import './buttonsAndTxtBxs.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

async function saveData(){
  let userinitials = document.getElementById("userInitialTextBox").value;
  let eventName = document.getElementById("eventNameTxtBox").value;
  let baudRate = document.getElementById("setBaudTxtBox").value;
  let newProjectData = new configDataHolder(userinitials, eventName, baudRate);
  let newProjectDataString = JSON.stringify(newProjectData); // parse this data string for raw json
  console.log(newProjectDataString)

  const response = await fetch('http://localhost:5000/api/projectConfig', {
    method: 'POST',
    body: JSON.stringify(newProjectData), 
    url: 'http://localhost:5000',
    mode: 'cors', 
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }

  })
  localStorage.setItem("data", newProjectDataString);
  window.location.href='./main';
  
}

class configDataHolder{
  constructor(userInitials, eventName, baudRate){
    this.userInitials = userInitials;
    this.eventName = eventName;
    this.baudRate = baudRate;
  }
};

function IntroConfigPage() {
  return (
    <div className="App">
      <div className='Tab-buttons'>
        <Modal.Header>
          {/* Min */}
            <Button variant="white"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-window-dash" viewBox="0 0 16 16">
                <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                <path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4Zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2Z"/>
                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z"/>
              </svg>
            </Button>
            {/* Max */}
            <Button variant="white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-window-fullscreen" viewBox="0 0 16 16">
                <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
                <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
              </svg>
            </Button>
            {/* Close */}
            <Button variant="white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </Button>
        </Modal.Header>
      </div>
      <header className="App-header">
        CAN Bus Visualizer
      </header>
      <form className='Import-project-content-holder'>
        <button type="button" className="configInputBoxes" id="importProjectButton">Import Project</button> 
        <div className='Gray-seperator'></div>
        <button type="button" className="configInputBoxes" id="openProjectButton"> Open Project</button>
        <div className='Gray-seperator'></div>
        <input className="configInputBoxes" id="userInitialTextBox" type="text" placeholder='User Initials'/> 
        <button type="button" className="configInputBoxes" id="importBlacklistButton"> Import Blacklist(s)</button>
        <button type="button" className="configInputBoxes" id="importDBCButton"> Import DBC File</button>
        <input className="configInputBoxes" id="eventNameTxtBox" type="text" placeholder='Event Name'/>
        <input className="configInputBoxes" id="setBaudTxtBox"type="text" placeholder="Set Baud Rate" />
        <button type="button" onClick={saveData} className='doneButton'>Done</button>
      </form>
    </div>
  );
};

export default IntroConfigPage;
