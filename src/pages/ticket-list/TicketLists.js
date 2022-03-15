import {React, useState, useEffect} from 'react';
import {Container,Row, Col, Button} from 'react-bootstrap'
import Breadcrumb1 from '../../components/breadcrumb/Breadcrumb';
import SearchForm from '../../components/search-form/SearchForm';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-ticket.json';

const TicketLists = () =>{

    const [str,setstr] = useState('');
    const [dispTicket, setDispTicket] = useState(tickets);

    useEffect(()=>{}, [str, dispTicket])

    const handleOnchange = e =>{
        const {value} = e.target;
        setstr(value);
        searchTicket(value);
    };

    const searchTicket = sttr =>{
        const displayTickets = tickets.filter(row=> row.subject.toLowerCase().includes(sttr.toLowerCase()))
        
        setDispTicket(displayTickets);
    }

    return (
          
        <Container> 

          <Row>
              <Col>
              <Breadcrumb1 page="Ticket List"/>
              </Col>
          </Row>

          <Row className="mt-4">
              <Col >
              <Button variant="info">Add New Ticket</Button>
              </Col>

              <Col className='text-right'>
                <SearchForm handleOnchange={handleOnchange} str={str}/>
              </Col>
          </Row>

          <hr/>

          <Row>
              <Col>
               <TicketTable tickets={dispTicket}/>
              </Col>
          </Row>

        </Container>
    )
};

export default TicketLists;