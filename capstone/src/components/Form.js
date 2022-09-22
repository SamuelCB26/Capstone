import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const style1 = {display: 'flex'}
const style2 = {flexDirection: 'column'}
const style3 = {justifyContent: 'center'}
const style4 = {display: 'inline-block'}
const style5 = {alignItems: 'center'}

const Forms = () => {
return (
    <Form style={{...style1, ...style2, ...style3, ...style4, ...style5}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="input" placeholder="Enter First Name" />
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="input" placeholder="Enter Surname" />
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
)
}

export default Forms