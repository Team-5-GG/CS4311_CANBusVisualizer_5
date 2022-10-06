import React from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

function savePopUp(props){
    return (
    
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Save Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-background">
                </div>
            </Modal.Body>

        </Modal>
    )
}

function SavePopUp(){
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button className="button-color" onClick={() => setModalShow(true)}>
                Save Project
            </Button>
            <savePopUp show={modalShow} onHide={() => setModalShow(false)}></savePopUp>
        </>
    );
}

export default SavePopUp;