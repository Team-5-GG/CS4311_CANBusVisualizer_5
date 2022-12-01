import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function ArchiveModal(props) {
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
                    Archive Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group">
                    Project will be terminated, do you wish to archive current project?
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Yes</Button>
                <Button variant="secondary">No</Button>

            </Modal.Footer>
        </Modal>
    );
}

function ArchivePopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Archive
            </div>

            <ArchiveModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default ArchivePopup; 
