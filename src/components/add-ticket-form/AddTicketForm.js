import React from 'react';
import {Form, Button, Row,  Col} from 'react-bootstrap'
import './add-ticket-form.css'

const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt}) =>{
   
    return (
        <div className=' mt-3 add-new-ticket'>

            <h1 className='text-info text-center'>Add New Ticket</h1>
            
            <hr />

            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                     
                     <Form.Group  as={Row} style={{marginBottom: 10, marginTop: 10}}>
                         <Form.Label column sm={3}>Subject</Form.Label>
                         <Col sm={9}>
                         <Form.Control 
                         type = 'text'
                         name='subject'
                         value={frmDt.subject}
                         onChange = {handleOnChange}
                         placeholder='Subject'
                         required
                         />
                         </Col>
                     </Form.Group>
 
                     <Form.Group as={Row}  style={{marginBottom: 10}}>
                         <Form.Label column sm={3}>Issue Found</Form.Label>
                         <Col sm={9}>
                         <Form.Control 
                         type = 'date'
                         name='issueDate'
                         value={frmDt.issueDate}
                         onChange = {handleOnChange}
                         required
                         />
                         </Col>
                     </Form.Group>

                     <Form.Group>
                         <Form.Label>Description</Form.Label>
                         <Form.Control 
                         as = 'textarea'
                         name='detail'
                         rows="5"
                         value={frmDt.detail}
                         onChange = {handleOnChange}
                         required
                         />
                     </Form.Group>
 
 
                     <Button type="submit" style={{marginTop: 10}} variant="info"  >Submit Ticket</Button>
                       
 
                     </Form>
        </div>
    )
}

export default AddTicketForm;

