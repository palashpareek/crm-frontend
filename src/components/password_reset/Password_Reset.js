import React from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Password_Reset  = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) =>{
    return (
        <div style={{background: 'white', padding: 20, borderRadius: 10}}>
           <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                     
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type = 'email'
                        name='email'
                        value={email}
                        onChange = {handleOnChange}
                        placeholder='Enter Email'
                        required
                        />
                    </Form.Group>


                    <Button type="submit" style={{marginTop: 10}}>Reset Password</Button>
                      

                    </Form>
                   <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <a href="#!" onClick={()=>formSwitcher('login')}>Back to Login</a>
                    </Col>
                </Row>
           </Container>
        </div>
    )
}

export default Password_Reset;