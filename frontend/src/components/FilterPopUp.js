import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function UseFilterPopUp(props) {
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
                    Filter
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="form-group">
                    Filtering options will be displayed here
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Yes</Button>
                <Button variant="secondary">No</Button>

            </Modal.Footer>
        </Modal>
    );
}

function FilterPopUp() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Filter
            </div>

            <UseFilterPopUp show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default FilterPopUp; 