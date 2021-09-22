import React from 'react'
import logo from '../logo.svg';
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} className="nav-logo" alt="logo" />
                </NavLink>
                <Bars />
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
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar

const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;

`

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &.active {
        color: green;
    }
`

const Bars = styled(FaBars)`
    display: none;
    color: green;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 786px) {
        display: none;
    }
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 786px) {
        display: none;
    }
`

const NavBtnLink = styled(Link)`
    border-radius: 5px;
    background: green;
    padding: 10px 22px;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        backgrounf: #fff;
        color: green;
        transition: all 0.2s ease-in-out;
    }
`