import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/img/logo.png'
import {useHistory} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () =>{
    const history = useHistory();

    const logMeOut = () =>{
        history.push("/");
    }
    return(
        
       <Navbar collapseOnSelect  bg="info"  variant="dark"  expand="md" >

           <Navbar.Brand>
               <img src={logo} alt='logo' width="60px"></img>
           </Navbar.Brand>

           <Navbar.Toggle  aria-controls='basic-navbar-nav' />

           <Navbar.Collapse id='basic-navbar-nav'>

               <Nav className='ms-auto'>  
                  {/* <Link to="/dashboard">Dashboard</Link>
                   <Link to="/tickets">Tickets</Link>
                   <Link to="">Logout</Link>  */}
                   
                   <LinkContainer  to="/dashboard">
                   <Nav.Link>Dashboard</Nav.Link>
                   </LinkContainer>

                   <LinkContainer  to="/tickets">
                   <Nav.Link>Tickets</Nav.Link>
                   </LinkContainer>

                   <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
                  
        
               </Nav>

           </Navbar.Collapse>

       </Navbar>
    );
};

export default Header;