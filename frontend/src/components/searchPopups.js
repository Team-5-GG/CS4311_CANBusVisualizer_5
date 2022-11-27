import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function SearchMapModal(props) {
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
                    Search Map
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="form-group">
                    <input className="form-control" id="name" />
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Search</Button>

            </Modal.Footer>
        </Modal>
    );
}

function SearchMapPopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Map
            </div>

            <SearchMapModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

function SearchTrafficModal(props) {
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
                    Search Traffic
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="form-group">
                    <input className="form-control" id="name" />
                </div>
                
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Search</Button>

            </Modal.Footer>
        </Modal>
    );
}

function SearchTrafficPopup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Traffic
            </div>

            <SearchTrafficModal show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export {SearchTrafficPopup, SearchMapPopup}; 
