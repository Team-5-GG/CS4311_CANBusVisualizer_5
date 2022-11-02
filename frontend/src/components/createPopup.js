import React from "react";

function Modal({closeModal}){
    let fileHandle; // create a reference for our file handle
    let fileData; //data from the file explorer
    let text; //set the data to text

    async function dbcUploader(e) {
        e.preventDefault();
        console.log('You clicked open file.');
        // open file picker
        [fileHandle] = await window.showOpenFilePicker();
        //get the data
        fileData = await fileHandle.getFile();
        //print the data in text form
        text = await fileData.text();
        console.log(text);
    }
    return(
        <div className="modal-background">
            <div className="modal-container">
                <button id = "closeCreateWindow" onClick={() => closeModal(false)}></button>
                <div className="createProject-title">
                    <h1> Create Project</h1>
                </div>
                <div className="modal-body">
                    <form className="createProjectTextBox">
                        <input className="configInputBoxes" id="createProjectTextBox" type="text" placeholder='User Initials'/> 
                        <button type="button" className="configInputBoxes" id="createProjectTextBox"> Import Blacklist(s)</button>
                        <button type="button" onClick={dbcUploader} className="configInputBoxes" id="createProjectTextBox"> Import DBC File</button>
                        <input className="configInputBoxes" id="createProjectTextBox" type="text" placeholder='Event Name'/>
                        <input className="configInputBoxes" id="createProjectTextBox"type="text" placeholder="Set Baud Rate" />
                    </form>
                </div>
                <div className="createProject-footer">
                    <button>Done</button>
                </div>
            </div>
        </div>
    )
}

{/* <form className='Import-project-content-holder'>
</form> */}
export default Modal