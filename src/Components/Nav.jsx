import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const Navi = styled.nav`
    width: 100%;
    height: 15vh;
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
    span{
        text-decoration: none;
        font-size: 1.3vw;
        font-weight: 500;
        font-family: 'Roboto Flex', sans-serif;
        color: #fff;
        transition: all .5s linear;
        cursor:pointer;
        &:hover{
            color: #6b8c10;
        }
    }
    .animate{
        width: 20%;
        height: auto;
        border-top: 4px solid #03030c;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 20%;
        top: 10%;
        z-index: 50;
        a{
            display: block;
            padding:5% 4%;
            font-size: 1.2vw;
            border-bottom: .5px solid lightgrey;
            color: #03030c;
            text-align: center;
            font-family: 'Roboto Flex', sans-serif;
            font-weight: 500;
            text-decoration: none;
            transition: all .5s linear;
            &:hover{
                background: lightgrey;
            }
        }
    }
    .animate1{
        width: 18%;
        height: auto;
        border-top: 4px solid #2c3513;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 35%;
        top: 25%;
        z-index: 50;
        a{
            display: block;
            padding:3% 4%;
            font-size: 1vw;
            border-bottom: .5px solid lightgrey;
            color: #2c3513;
            text-decoration: none;
            transition: all .5s linear;
            &:hover{
                background: lightgrey;
            }
        }
    }
    .animate2{
        width: 15%;
        height: auto;
        border-top: 4px solid #2c3513;
        background: #fff;
        position: fixed;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        left: 75%;
        top: 25%;
        z-index: 50;
        a{
            display: block;
            padding:5% 4%;
            font-size: 1vw;
            border-bottom: .5px solid lightgrey;
            color: #2c3513;
            text-decoration: none;
            transition: all .5s linear;
            &:hover{
                background: lightgrey;
            }
        }
    }

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
    const [showMenu, setShowMenu]= useState(false)
    const [showMenu2, setShowMenu2]= useState(false)


  
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: showMenu,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })

    const menuTransitions2 = useTransition(showMenu2, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      reverse: showMenu2,
      delay: 200,
        // config: config.molasses,
      // onRest: () => set(!show),
    })

    const changeBg = () => {
        if(window.scrollY >= 25){
            setBg(true)
        }else{
            setBg(false)
        }
    }

    window.addEventListener('scroll', changeBg)

  return (
    <Navi bgc={ bg ? '#10040d' : 'transparent'}>
        <Logo>
            <img src="/logo.png" alt="" width='200' height='80' />
        </Logo>
        <Mid>
            <span onMouseOver={()=>{setShowMenu(true)}} onMouseOut={()=>{setShowMenu(false)}}>About Us</span>
            <Link to='/' >Reviews & Research</Link>
            <Link to='/' >Services</Link>
            <span onMouseOver={()=>{setShowMenu2(true)}} onMouseOut={()=>{setShowMenu2(false)}}>Membership</span>
            <Link to='/' >Media</Link>
            <Link to='/' >Locations</Link>
            <Link to='/' >Faq</Link>
        </Mid>
        <Register>
            Sign up
        </Register>

        {
        menuTransitions(
        (styles, item) => item && <animated.div style={styles} className='animate' onMouseOut={()=>{setShowMenu(false)}} onMouseOver={()=>{setShowMenu(true)}}>
            <Link to='/history' onClick={()=>{setShowMenu(false)}}>History & Background</Link>
            <Link to='/whoWeAre' onClick={()=>{setShowMenu(false)}}>Who we are</Link>
            <Link to='/howWeWork' onClick={()=>{setShowMenu(false)}}>How we work</Link>
            <Link to='/whereWeWork' onClick={()=>{setShowMenu(false)}}>Where we operate</Link>
            <Link to='/success' onClick={()=>{setShowMenu(false)}}>Our Success and Achievement</Link>
        </animated.div>
        )
      }

    {
        menuTransitions2(
        (styles, item) => item && <animated.div style={styles} className='animate1' onMouseOut={()=>{setShowMenu2(false)}} onMouseOver={()=>{setShowMenu2(true)}}>
            <Link to='/'>Current Issues</Link>
            <Link to='/'>Overview Of Achievements Issues</Link>
            <Link to='/'>Sectors/SubSectors Sustained Achievements</Link>
        </animated.div>
        )
    }
    </Navi>
  )
}

export default Nav