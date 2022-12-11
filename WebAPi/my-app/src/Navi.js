import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export  class Navi extends Component
{
    render()
    {
        return (<Navbar bg='dark' expand="lg">
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-mav'>
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/employee">
                            Employees
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        );
        
    }
}
