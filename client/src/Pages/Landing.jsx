import React from 'react'
import {Form, Button, Container} from 'react-bootstrap';
import '../Styles/Landing.css';

function Landing() {
  return (
    <Container className='contain'>
        <Form className="form_cont">
            <Form.Group>
                
            <Button className="room w-100 mb-4">Create Room</Button>
            <div className="or">-OR-</div>
                <div className="join_cont mb-2 mt-3">
                    <Form.Control type='text' placeholder='Enter a Room ID' className="form_input" required></Form.Control>
                    <Button className="buttn1">Join Room</Button>
                </div>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Landing