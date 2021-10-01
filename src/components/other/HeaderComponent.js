import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link className="nav-link text-black" to='/'>RareTool</Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
