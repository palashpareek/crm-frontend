import {React, useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import Breadcrumb1 from '../../components/breadcrumb/Breadcrumb';
import tickets from '../../assets/data/dummy-ticket.json';
import MessageHistory from '../../components/message-history/MessageHistory';
import UpdateTicket from '../../components/update-ticket/UpdateTicket';
import {useParams} from 'react-router-dom';


const TicketPage = () => {
    const {tId} = useParams();
    const [message, setMessage] = useState('');
    const [ticket, setTicket] = useState('');

    useEffect(() =>{
        for(let i=0;i<tickets.length;i++)
        {
            if(tickets[i].id == tId)
            {
                setTicket(tickets[i]);
                continue;
            }
           
        }

        // setTicket(tickets.filter((tkt)=>{
        //     return tkt.id == tId;
        // }))

    }, [message, tId])

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
                   {ticket.history &&  <MessageHistory msg={ticket.history}/>}
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