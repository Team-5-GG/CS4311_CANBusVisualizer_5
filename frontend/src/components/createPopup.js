import React from "react";

function Modal({closeModal}){
    return(
        <div className="modal-background">
            <div className="modal-container">
                <button id = "closeCreateWindow" onClick={() => closeModal(false)}> X </button>
                <div className="title">
                    <h1> Create Project</h1>
                </div>
                <div className="modal-body">
                    <form>
                        <input className="configInputBoxes" id="userInitialTextBox" type="text" placeholder='User Initials'/> 
                        <button type="button" className="configInputBoxes" id="importBlacklistButton"> Import Blacklist(s)</button>
                        <button type="button" className="configInputBoxes" id="importDBCButton"> Import DBC File</button>
                        <input className="configInputBoxes" id="eventNameTxtBox" type="text" placeholder='Event Name'/>
                        <input className="configInputBoxes" id="setBaudTxtBox"type="text" placeholder="Set Baud Rate" />
                    </form>
                </div>
                <div className="footer">
                    <button>Close</button>
                    <button>Done</button>
                </div>
            </div>
        </div>
    )
}

{/* <form className='Import-project-content-holder'>
</form> */}
export default Modal