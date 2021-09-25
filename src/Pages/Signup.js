import React from 'react'
import styled from 'styled-components'
import Tabs from '../Navbar/Tabs';

const Signup = () => {
    return (
        <TabDiv className="signup-header">
            <Tabs />
        </TabDiv>
    )
}

export default Signup


const TabDiv = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
`;