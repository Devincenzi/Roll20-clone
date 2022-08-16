import React from "react";
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export default function NavBarAdmin(props){
    return (
        <>
        <Navbar bg='dark' variant='dark' className='w-100'>
            <Container>
                <Navbar.Brand href="#home">Roll20 Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/admin">Home</Nav.Link>
                    <Nav.Link href="/admin/Classes">Classes</Nav.Link>
                    <Nav.Link href="/admin/Itens">Itens</Nav.Link>
                    {props.children ? props.children : ''}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}