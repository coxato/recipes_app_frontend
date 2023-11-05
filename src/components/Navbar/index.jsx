import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Button, Space } from 'antd';
import { StarFilled } from '@ant-design/icons';
// hooks
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
// custom components
import NavbarAvatar from './navbarAvatar';
// style
import './styles/NavbarStyle.css';


const HeaderNavbar = () => {
    const { logged, setLogout } = useAuth();
    const navigate = useNavigate();

    const goto = (to) => navigate(to);

    const handleLogout = () => {
        setLogout();
        navigate('/login')
    }

    const isDark = false; // need to implement theme (context ready for now)

    return (
        <div className="navbar-wrapper" style={{ backgroundColor: isDark ? '#49416D' : '#A882DD' }}>
            <Navbar>
                <Container className='nv-container'>
                    <Navbar.Brand className='brand-logo' onClick={() => goto('/')}>
                        🍲📖
                    </Navbar.Brand>
                    <Space>
                        {
                            logged ? (
                                <>
                                    <Button 
                                        icon={<StarFilled />} 
                                        type="primary"
                                        onClick={() => goto('favorites')}
                                    >
                                            Favorites
                                    </Button>
                                    <NavbarAvatar 
                                        handleLogout={handleLogout} 
                                        logged={logged}
                                    />
                                </>

                            ) : (
                                <>
                                    <Button 
                                        onClick={() => goto('login')}
                                        type="primary"
                                    >
                                        Login
                                    </Button>
                                    <Button 
                                        onClick={() => goto('register')}
                                        type="primary"
                                        style={{ background: "lightgreen", borderColor: "lightgreen" }}
                                    >
                                        Register
                                    </Button>
                                </>
                            )
                        }
                    </Space>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeaderNavbar;