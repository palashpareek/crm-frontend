import {React, useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import Breadcrumb1 from '../../components/breadcrumb/Breadcrumb';
import tickets from '../../assets/data/dummy-ticket.json';
import MessageHistory from '../../components/message-history/MessageHistory';
import UpdateTicket from '../../components/update-ticket/UpdateTicket';

const ticket = tickets[0];

const TicketPage = () => {

    const [message, setMessage] = useState('')

    useEffect(() =>{

    }, [message])

    const handleOnChange = e =>{
        setMessage(e.target.value);
    };

    const handleOnSubmit = e =>{
        e.preventDefault();
             alert("Submitted");
    }


    return(
        <Container>
           <Row>
               <Col>
                <Breadcrumb1 page="Ticket"/>
               </Col>
           </Row>

           <Row>
               <Col className='text-weight-bolder text-secondary'>
                 <div className='subject'>Subject: {ticket.subject}</div>
                 <div className='date'>Ticket Opened: {ticket.addedAt}</div>
                 <div className='status'>Status: {ticket.status}</div>
               </Col>

               <Col className='text-end'>
                 <Button variant='outline-info'>Close Ticket</Button>
               </Col>
           </Row>

           <Row>
               <Col className='mt-4'>
               <MessageHistory msg={ticket.history}/>
               </Col>
           </Row>

           <hr />

           <Row>
               <Col className='mt-4'>
                    <UpdateTicket msg={message} 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    />
               </Col>
           </Row>


        </Container>
    )
};

export default TicketPage