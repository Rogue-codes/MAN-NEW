import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navi = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 2%;
    color: #03030c;
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
        color: #6b8c10;
        transition: all .5s linear;
        &:hover{
            color: #6b8c10;
        }
    }
`
const Register = styled.button`
    padding: 1% 4%;
    background: #03030c;
    font-family: 'Roboto Flex', sans-serif;
    border-radius: 5px;
    color: #fff;
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
    <Navi bgc={ bg ? '#fff' : 'transparent'}>
        <Logo>
            <img src="/logo.png" alt="" width='100' height='50' />
        </Logo>
        <Mid>
            <Link to='/' cl={ bg ? '#fff' : '#03030c'}>About Us</Link>
            <Link to='/' cl={ bg ? '#03030c' : '#fff'}>Reviews & Research</Link>
            <Link to='/' cl={ bg ? '#03030c' : '#fff'}>Services</Link>
            <Link to='/' cl={ bg ? '#03030c' : '#fff'}>Membership</Link>
            <Link to='/' cl={ bg ? '#03030c' : '#fff'}>Media</Link>
            <Link to='/' cl={ bg ? '#03030c' : '#fff'}>Locations</Link>
            <Link to='/' cl={ bg ? '#03030c' : '#fff'}>Faq</Link>
        </Mid>
        <Register>
            Sign up
        </Register>
    </Navi>
  )
}

export default Nav