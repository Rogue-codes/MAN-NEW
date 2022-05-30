import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navi = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    color: #fff;
    background:transparent;
    align-items: center;
    background: ${props => props.bgc};
    transition: all .5s linear;
    z-index: 50;
    position: fixed;
    top: 0;
    bottom: 0;
`
const Logo = styled.div`
    width: 15%;
    font-size: 3vw;
`
const Mid = styled.div`
    width: 55%;
    display: flex;
    justify-content: space-between;
    a{
        text-decoration: none;
        font-size: 1.3vw;
        font-weight: 500;
        font-family: 'Roboto Flex', sans-serif;
        color: #fff;
        transition: all .5s linear;
        &:hover{
            color: #6b8c10;
        }
    }
`
const Register = styled.button`
    padding: 1% 4%;
    background: #fff;
    font-family: 'Roboto Flex', sans-serif;
    border-radius: 5px;
    color: #03030c;
    font-weight: 800;
    border: none;
    transition: all .5s linear;
    &:hover{
        background: transparent;
        border: 2px solid #fff;
        color: #fff;
    }
`

function Nav() {
    const [bg, setBg] = useState(false)


    const changeBg = () => {
        if(window.scrollY >= 25){
            setBg(true)
        }else{
            setBg(false)
        }
    }

    window.addEventListener('scroll', changeBg)

  return (
    <Navi bgc={ bg ? '#03030c' : 'transparent'}>
        <Logo>
            <img src="/logo.png" alt="" width='100' height='50' />
        </Logo>
        <Mid>
            <Link to='/'>About Us</Link>
            <Link to='/'>Reviews & Research</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Membership</Link>
            <Link to='/'>Media</Link>
            <Link to='/'>Locations</Link>
            <Link to='/'>Faq</Link>
        </Mid>
        <Register>
            Sign up
        </Register>
    </Navi>
  )
}

export default Nav