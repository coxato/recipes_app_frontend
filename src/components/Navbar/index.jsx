import React, { useEffect, useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HeaderNavbar = () => {
    const [isLogged, setIsLogged] = useState("false");
    const navigate = useNavigate();

    const goto = (to) => navigate(to);

    useEffect(() => {
        const logged = localStorage.getItem('logged');
        setIsLogged(logged === "true");
    }, []);

    return (
        <Navbar className="bg-body-tertiary" color="primary">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
          <div className="buttons-container">
            
            <Button onClick={() => goto('login')}>Login</Button>
            <Button onClick={() => goto('register')}>Register</Button>
          </div>
        </Container>
      </Navbar>
    );
}
 
export default HeaderNavbar;