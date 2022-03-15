import React from 'react';
import {Form, Row, Col} from 'react-bootstrap'

const SearchForm = ({handleOnchange, str}) =>{
    return (

       <Form>
           <Form.Group as={Row}>
               <Form.Label coumn sm="3">Search: </Form.Label>
               <Col sm="9">
               <Form.Control
               name="searchtr"
               onChange={handleOnchange}
               value={str}
               placeholder='Search...' 
               />
               </Col>
           </Form.Group>
       </Form>
    )
};

export default SearchForm;