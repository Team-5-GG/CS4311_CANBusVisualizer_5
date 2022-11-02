import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SyncModal(props) {
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
                    Sync Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group">
                    Project will be terminated, do you wish to continue with the syncing?
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Yes</Button>
                <Button variant="secondary">No</Button>

            </Modal.Footer>
        </Modal>
    );
}

function SyncPopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Sync
            </div>

            <SyncModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default SyncPopup; 
