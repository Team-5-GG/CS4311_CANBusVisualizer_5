import React , { Component}  from 'react';
import './buttonsAndTxtBxs.css';
function reroute() {
  window.location.href = './edit'
};

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
      <header className='Blue-rectangle'></header>
      <header className="App-header">
        Welcome!
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
}

export default IntroConfigPage;
