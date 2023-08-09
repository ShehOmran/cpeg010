import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, Button, Container, Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import '../assets/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const MainLayout = (props) => {
    const { children } = props;

    return (
        <>
            <Header className='App-header' id='header' title='This is the header'>
                <img src={logo} className="App-logo-left" alt="logo" />
                <Container>
                    <Row>
                        <Col>
                            <Navbar>
                                <NavbarBrand>Shehab Omran's ToDo Lists</NavbarBrand>

                                <Nav navbar>

                                    <NavItem inNavbar>
                                        <Link to='/fun-fact'><Button color="dark">Fun Fact</Button></Link>
                                    </NavItem>

                                    <NavItem inNavbar>
                                        <Link to='/todo-list'><Button color="dark">To Do List</Button></Link>
                                    </NavItem>

                                </Nav>

                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </Header>

            {children}

            <Footer />
        </>
    );
}

export default MainLayout;