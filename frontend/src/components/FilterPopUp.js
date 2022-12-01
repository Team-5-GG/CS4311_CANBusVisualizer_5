import React from "react";
import { Modal } from "react-bootstrap";
import { Card, Container, Col, Row, Form, Button } from "react-bootstrap";
import { useState } from 'react';

let Filter = (props) => {

    let [state, setState] = useState({
        input: {
            size: '',
            name: '',
            node: ''

        }
    });

    let updateInput = (e) => {
        setState({
            ...state,
            input: {
                ...state.input,
                [e.target.name]: e.target.value
            }
        })
    };

    let submit = (e) => {
        e.preventDefault();
        console.log(state.input);
    }


    return (
        <>
            <pre>Confirming update in RT {JSON.stringify(state)}</pre>
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
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="mb-0"><b>Size:</b></Form.Label>
                            <Form.Control className="" name="source" onChange={updateInput} type="text" placeholder="Source"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="mb-0"><b>Name:</b></Form.Label>
                            <Form.Control className="" name="source" type="text" placeholder="Source"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="mb-0"><b>Node:</b></Form.Label>
                            <Form.Control className="" name="source" type="text" placeholder="Source"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Button onClick={submit} variant="dark" type="submit"><b>Filter</b></Button>{' '}
                           
                        </Form.Group>
                    </Form>

                </Modal.Body>

            </Modal>

        </>

    );

}
function FilterPopUp() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                Filter
            </div>

            <Filter show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
}

export default FilterPopUp; 