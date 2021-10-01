import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';


export const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    RareTool
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
