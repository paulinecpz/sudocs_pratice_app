import React, { useState } from 'react'
import logo from '../logo.svg';
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} className="nav-logo" alt="logo" />
                </NavLink>
                <Bars onClick={()=> setShowMenu(!showMenu)}/>
                <NavMenu>
                    <NavLink to="/features" activeStyle>
                        Features
                    </NavLink>
                    <NavLink to="/pricing" activeStyle>
                        Pricing
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar

const Nav = styled.nav`
    background: transparent;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    padding: 12px 32px;
    margin-right: 36px;

    img {
        margin-right: 48px;
    }
`

const NavLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #56B460;
    }
`

const Bars = styled(FaBars)`
    display: none;
    color: black;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #56B460;
    }

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:8px;
        right:0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const NavMenu = styled.div`
    display: contents;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 786px) {
        display: none;
    }
`