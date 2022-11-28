import React from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function EditInterfaceModal(props) {
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
                    Edit Interface Name
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="form-group">
                    <label htmlFor="name">Interface Name</label>
                    <input className="form-control" id="name" />
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Done</Button>

            </Modal.Footer>
        </Modal>
    );
}

function EditInterfacePopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Edit Interface Name
            </div>

            <EditInterfaceModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default EditInterfacePopup; 
