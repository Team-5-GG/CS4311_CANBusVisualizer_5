import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function MyModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static "
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="name">User Initials</label>
                    <input className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Import DBC File</label>
                    <input className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input className="form-control" id="name" />
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

function CreatePopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Create
            </div>

            <MyModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default CreatePopup; 
