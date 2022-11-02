import React from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../displayer.css'

function MyModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            size="sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Save Project
                </Modal.Title>
            </Modal.Header>

            <Modal.Body id="SacePopUpBody">
                <div>Save Project?</div>
                <div className="YesNoPopUpDiv">
                    <Button variant="secondary">No</Button>
                    <Button variant="primary">Yes</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

function SavePopUp() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Save
            </div>

            <MyModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default SavePopUp;