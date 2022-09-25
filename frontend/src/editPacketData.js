import React, { useState } from 'react';
import {Card, Container, Col, Row, Form, Button} from "react-bootstrap";

const goHome = event => {
    window.location.href='./'
};

let EditPacket = () => {

    let [state, setState] = useState({
        packet : {
            source : '',
            dest : '',
            dPAddress : ''
        }
    });

    let updateInput = (e) => {
        setState( { 
            ...state,
            packet : {
                ...state.packet,
                [e.target.name] : e.target.value
            }
        })
    };
    let submit = (e) => {
        e.preventDefault();
        console.log(state.packet);
    };

    return (
        <>
        <pre>Confirming update in RT--> {JSON.stringify(state)}</pre>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Card className="shadow-lg" style={{backgroundColor: 'lightgray'}}>
                            <Card.Header className="text-center p-4">
                                <h3>Edit Packet Data</h3>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="mb-0"><b>Source:</b></Form.Label>
                                        <Form.Control className="" name="source" onChange={updateInput} type="text" placeholder="Source"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="mb-0"><b>Destination:</b></Form.Label>
                                        <Form.Control name="dest" onChange={updateInput} type="text" placeholder="Destination"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="mb-0"><b>Decoded Physical Address:</b></Form.Label>
                                        <Form.Control name="dPAddress" onChange={updateInput} type="text" placeholder="Decoded Physical Address"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mb-1">
                                        <Button onClick={submit} variant="light" type="submit"><b>Something</b></Button>{' '}
                                        <Button onClick={submit} variant="light" type="submit"><b>Exit</b></Button>{' '}
                                        <Button onClick={submit} variant="light" type="submit"><b>Save and Exit</b></Button>{' '}
                                        <Button onClick={submit} variant="primary" type="submit"><b>Send to Bus</b></Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EditPacket;
