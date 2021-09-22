import React from 'react'
import logo from '../logo.svg';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} className="nav-logo" alt="logo" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink tp="/features" activeStyle>
                        Features
                    </NavLink>
                    <NavLink tp="/pricing" activeStyle>
                        Pricing
                    </NavLink>
                    <NavLink tp="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink tp="/login" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <BavBtn>
                    <NavBtnLink to="/login">Login</NavBtnLink>
                </BavBtn>
            </Nav>
        </>
    )
}

export default Navbar