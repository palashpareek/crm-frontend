import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-ticket.json'
import Breadcrumb1 from '../../components/breadcrumb/Breadcrumb';
import {Link} from 'react-router-dom';

const Dashboard = () =>{

    return (

        <Container>
            <Row className='mt-2'>
                <Col>
                <Breadcrumb1 page="Dashboard"/>
                </Col>
            </Row>
            
            <Row>

                <Col className='text-center mt-5 mb-2'>
                  <Link to="/add-ticket">
                  <Button variant='info' style={{'font-size': '2rem', padding: '10px 30px', color: 'white'}}>Add New Ticket</Button>
                  </Link>
                </Col>

            </Row>

            <Row>

                <Col  className='text-center mb-2'>
                   <div>Total Tickets: 80</div>
                   <div>Pending Ticket: 5</div>
                </Col>

            </Row>

            
            <Row>
                <Col  className='mt-2'>
                    Recently added tickets
                </Col>
            </Row>

            <hr/>

            <Row>
                <Col className='recent-ticket'>
                    <TicketTable  tickets={tickets}/>      
                </Col>
            </Row>
        </Container>

    )
}

export default Dashboard;