import React , { Component}  from 'react';
import './buttonsAndTxtBxs.css';
import Modal from './components/createPopup';
import {useState } from "react";
import {Link} from 'react-router-dom';

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
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      {/* Page title */}
      <header className="App-header">
        CAN Bus Visualizer
      </header>
      {/* Page body */}
      <header className="App-body">
        {/* Create Project button */}
        <button
        type="button" className="configInputBoxes"
        id="createProjectButton"
        onClick={()=>{
          setOpenModal(true);
        }}
        >Create Project</button>
        {openModal && <Modal closeModal={setOpenModal}/>}
        {/* END of Create Project button */}
        <div className='Gray-seperator'></div>

        <button type="button" className="configInputBoxes" id="importProjectButton">Import Project</button> 
        
        <div className='Gray-seperator'></div>
        
        <button type="button" className="configInputBoxes" id="openProjectButton"> Open Project</button>
        <div className='Gray-seperator'></div>
        <button type="button" className="configInputBoxes" id="syncProjectButton"> Sync Project</button>
        <button type="button" className="configInputBoxes" id="archiveProjectButton"> Archive Project</button>
        
        {/*Goto CAN bus button - will redirect to the main page*/}
        <Link to="/main">
          <button type="button" className="configInputBoxes" id="gotoCANBusButton"> CAN Bus Manager</button>
        </Link>
      </header>
    </div>
  );
};

export default IntroConfigPage;
