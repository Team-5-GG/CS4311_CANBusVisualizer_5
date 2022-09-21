import './buttonsAndTxtBxs.css';


function reroute() {
  window.location.href = './edit'
};

function saveData(){
  let userinitials = document.getElementById("userInitialTextBox").value;
  let eventName = document.getElementById("eventNameTxtBox").value;
  let baudRate = document.getElementById("setBaudTxtBox").value;

  let newProjectData = new configDataHolder(userinitials, eventName, baudRate);
  let newProjectDataString = JSON.stringify(newProjectData);

  localStorage.setItem("data", newProjectDataString);
  
}

class configDataHolder{
  constructor(userinitials, eventName, setBaudRate){
    this.userinitials = userinitials;
    this.eventName = eventName;
    this.setBaudRate = setBaudRate;
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
        <button type="button" onClick={reroute} className='doneButton'>Done</button>
        

      </form>      
    </div>
  );
}

export default IntroConfigPage;
