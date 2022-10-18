import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function DeleteModal(props) {
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
                    Delete Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group">
                    Are you sure you want to delete the project?
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Yes</Button>
                <Button variant="secondary">No</Button>

            </Modal.Footer>
        </Modal>
    );
}

function DeletePopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Delete
            </div>

            <DeleteModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default DeletePopup; 
