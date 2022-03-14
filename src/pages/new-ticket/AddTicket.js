import {React, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm';
import Breadcrumb1 from '../../components/breadcrumb/Breadcrumb';

const initialFrmDt ={
    subject: '',
    issueDate: '',
    detail: ''
}
 
const AddTicket = () =>{

    const [frmData, setfrmData] = useState(initialFrmDt);

    useEffect(() => {}, [frmData]);

const handleOnChange = e =>{
     const {name, value} = e.target;

     setfrmData({
         ...frmData,
         [name]: value
     })

}

const handleOnSubmit = e => {
    
    e.preventDefault();

    console.log('Form submit request received');

    console.log(frmData)
}

    return (
         <Container>
             <Row>
                 <Col>
                 <Breadcrumb1 page="New Ticket"/>
                 </Col>
             </Row>

             <Row>
                 <Col>
                 <AddTicketForm 
                  handleOnChange={handleOnChange}
                 handleOnSubmit={handleOnSubmit}
                 frmDt = {frmData}
                 />
                 </Col>
             </Row>

         </Container>
    )
};

export default AddTicket;