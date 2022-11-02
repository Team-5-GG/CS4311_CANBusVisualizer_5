import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ImportModal(props) {
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
                    Import Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="name">Import Project</label>
                    <input className="form-control" id="name" />
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

function ImportPopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Import
            </div>

            <ImportModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default ImportPopup; 
