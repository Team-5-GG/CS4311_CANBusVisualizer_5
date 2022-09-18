import './buttonsAndTxtBxs.css';

const avoidSubmit = event => {
  event.preventDefault()
  console.log('You clicked the button')
}

function App() {
  return (
    <div className="App">
      <header className='Blue-rectangle'></header>
      <header className="App-header">
        Welcome!
      </header>
      <form className='Import-project-content-holder'>
        <button onClick={avoidSubmit} className="configInputBoxes" id="importProjectButton"type="text"> Import Project</button>
        <div className='Gray-seperator'></div>
        <button onClick={avoidSubmit} className="configInputBoxes" id="openProjectButton" type="text"> Open Project</button>
        <div className='Gray-seperator'></div>
        <input className="configInputBoxes" id="userInitialTextBox" type="text" placeholder='User Initials'/> 
        <button onClick={avoidSubmit} className="configInputBoxes" id="importBlacklistButton" type="text"> Import Blacklist(s)</button>
        <button onClick={avoidSubmit} className="configInputBoxes" id="importDBCButton" type="text"> Import DBC File</button>
        <input className="configInputBoxes" id="eventNameTxtBox" type="text" placeholder='Event Name'/>
        <input className="configInputBoxes" id="setBaudTxtBox"type="text" placeholder="Set Baud Rate" />
        <button className='doneButton'>Done</button>

      </form>
    </div>
  );
}

export default App;
