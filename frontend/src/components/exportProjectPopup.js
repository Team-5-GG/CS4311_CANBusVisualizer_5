import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ExportModal(props) {
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
                    Export Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group">
                    Do you want to export project to file?
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Yes</Button>
                <Button variant="secondary">No</Button>

            </Modal.Footer>
        </Modal>
    );
}

function ExportPopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Export
            </div>

            <ExportModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default ExportPopup; 
