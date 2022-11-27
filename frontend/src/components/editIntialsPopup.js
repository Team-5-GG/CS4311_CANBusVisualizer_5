import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function EditInitialsModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Initials
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="form-group">
                    <label htmlFor="name">User Initials</label>
                    <input className="form-control" id="name" />
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Done</Button>

            </Modal.Footer>
        </Modal>
    );
}

function EditInitialsPopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Edit Initials
            </div>

            <EditInitialsModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default EditInitialsPopup; 
