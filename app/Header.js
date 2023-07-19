'use client'

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import NightlightIcon from '@mui/icons-material/Nightlight';

function BasicExample(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CROWDFUNDING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        <Nav.Link onClick={props.changingtheme}>Theme<NightlightIcon/></Nav.Link>
            <Nav.Link href='../campaign' >CAMPAIN</Nav.Link>
            <Nav.Link href="../create_campaign">START CAMPAIN</Nav.Link>
            <Nav.Link href="../dashboard">DASHBOARD</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


  //   <div>
  //     <div className='container'>
  //       <div className='heading'>
  //         CROWDFUNDING
  //       </div>
  //       <div className='display'>
  //         <button>campaign</button>
  //         <button>start campaign</button>
  //         <button>dashboard</button>
  //       </div>
  //       <div className='toggle'>
  //         <button onClick={props.changingtheme}>CHANGETHEME</button>
  //       </div>
  //     </div>
  //   </div>
  // );




export default BasicExample;

