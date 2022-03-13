import React from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login  = ({handleOnChange, handleOnSubmit, formSwitcher,  email, pass}) =>{
    return (
        <div style={{background: 'white', padding: 20, borderRadius: 10}}>
           <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                     
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

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type = 'password'
                        name='password'
                        val={pass}
                        onChange = {handleOnChange}
                        placeholder='Enter Password'
                        required
                        />
                    </Form.Group>


                    <Button type="submit" style={{marginTop: 10}}>Login</Button>
                      

                    </Form>
                   <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <a href="#!" onClick={()=>formSwitcher('reset')}>Forget Password?</a>
                    </Col>
                </Row>
           </Container>
        </div>
    )
}

export default Login;