import React from 'react'
import styled from 'styled-components'
import logo2 from '../Assets/who.webp'
import logo3 from '../Assets/how2.jpeg'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaBook} from 'react-icons/fa'
import {GiScales} from 'react-icons/gi'
import {BiBox} from 'react-icons/bi'
import Footer from './Footer'
import Nav from './Nav'
// import {MdComputer} from 'react-icons/md'
// import {FiSettings} from 'react-icons/fi'
// import Footer from './Footer'
// import Nav from './Nav'

const HowreWeWorkContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
`
const Container = styled.div`
@media (max-width:480px) {
        height: 70vh;
    }
    width: 100%;
    height: 80vh;
    background:  linear-gradient(90deg, #0e0215ca 0%, #170101cf 32%, #0f140dc9 100%),url(${logo2}) center fixed ;
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation: kenburns-left 5s ease-out reverse forwards;
	animation: kenburns-left 5s ease-out reverse forwards;
    /* ----------------------------------------------
 * Generated by Animista on 2022-5-29 21:50:3
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation kenburns-left
 * ----------------------------------------
 */
@-webkit-keyframes kenburns-left {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 50%;
            transform-origin: 16% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, 15px);
            transform: scale(1.25) translate(-20px, 15px);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@keyframes kenburns-left {
  0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 16% 50%;
            transform-origin: 16% 50%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(-20px, 15px);
            transform: scale(1.25) translate(-20px, 15px);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
    h1{
        @media (max-width:480px) {
            font-size: 2rem;
        }
        color: #fff;
        font-size: 5vw;
    }
`
const Second = styled.div`
    @media (max-width:480px) {
        height: auto;
    }
    width: 100%;
    height: 40vh;
    padding: 2%;
h1{
    @media (max-width:480px) {
        font-size: 2rem;
    }
    font-size: 2vw;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
}
p{
    @media (max-width:480px) {
        font-size: 1.2rem;
    }
    font-size: 1.5vw;
    font-family: 'Lato', sans-serif;
}
`
const Third = styled.div`
    @media (max-width:480px) {
        height: auto;
    }
    width: 100%;
    height: 70vh;
    padding: 2%;
    h1{
        @media (max-width:480px) {
            font-size: 2rem;
        }
        font-size: 2vw;
        font-family: 'Lato', sans-serif;
        font-weight: 900;
    }
    li{
        @media (max-width:480px) {
            font-size: 1.2rem;
        }
        font-size: 1.5vw;
        font-family: 'Lato', sans-serif;
        margin-top: 2%;
    }
`
const Fourth = styled.div`
    @media (max-width:480px) {
        height: auto;
        flex-direction: column;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
    padding: 2%;
    background:  linear-gradient(90deg, #0e021594 0%, #17010184 32%, #0f140d8e 100%),url(${logo3}) center fixed ;
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
const Card = styled.div`
    @media (max-width:480px) {
        width: 90%;
        margin-top: 5%;
        height: auto;
        gap: 20%;
    }
    width: 25%;
    height: 80%;
    background: #03030c;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    justify-content: flex-start;
    gap: 10%;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 2%;
    cursor: pointer;
    h1{
        @media (max-width:480px) {
            font-size: 1rem;
        }
        font-family: 'Lato', sans-serif;
        font-size: 2vw;
        text-align: center;
    }
    .bottom{
        p{
            @media (max-width:480px) {
                font-size: .8rem;
            }
            font-size: 1.5vw;
            font-family: 'Lato', sans-serif;
            text-align: center;
        }
    }
`
function HowWeWork() {
  return (
    <HowreWeWorkContainer>
        <Nav/>
        <Container>
            <h1>WHO WE ARE</h1>
        </Container>
        <Second>
            <h1>This is Who We Are</h1>
            <p>The Manufacturers Resource Centre is the Business Solution Arm of Manufacturers Association of Nigeria (MAN). The Manufacturers Resource Centre prides herself as an entity dedicated to proffering Business Solutions to MAN Members thus develop their Businesses, increase Market share and Production Excellence.</p>
            <span><p>"Our Success is measured by the benefits of our clients"</p></span>
        </Second>

        <Third>
            <h1>Our Objectives</h1>
            <ul>
                <li>Aid our Manufacturers expand their market reach beyond our shores.</li>
                <li>Proffer current manufacturing solutions to manufacturers in the areas of Information Technology, Technology, Research & Development etc.</li>
                <li>Using Training, Business Support and Business Advisory as tools in achieving our purpose of aiding Manufacturers devise Solutions for Growth and Development.</li>
                <li>Build and increase Professional Capacity and Skills.</li>
            </ul>
        </Third>

        <Fourth>
            <Card>
            <div className="top">
                    <BsFillBriefcaseFill size='3rem'/>
                </div>
                <div className="mid">  
                    <h1>BUSINESS DEVELOPMENT SERVICES</h1>
                </div>
                <div className="bottom">
                    <p>
                    Identify possible problems affecting SME‘s by preparing a detailed technical due diligence report through review of their operations
                    </p>
                </div>
            </Card>

            <Card>
            <div className="top">
                    <FaBook size='3rem'/>
                </div>
                <div className="mid">  
                    <h1>BUSINESS INFORMATION SERVICES</h1>
                </div>
                <div className="bottom">
                    <p>
                        Sourcing of raw materials, Machinery and equipment, Markets, Model business profiles etc
                    </p>
                </div>
            </Card>

            <Card>
            <div className="top">
                    <GiScales size='3rem'/>
                </div>
                <div className="mid">  
                    <h1>BUSINESS CONSULTANCY</h1>
                </div>
                <div className="bottom">
                    <p>
                        Investment and financial advisory services, Local and international business linkages
                    </p>
                </div>
            </Card>

            <Card>
            <div className="top">
                    <BiBox size='3rem'/>
                </div>
                <div className="mid">  
                    <h1>ECONOMIC RESEARCH AND ANALYSIS</h1>
                </div>
                <div className="bottom">
                    <p>
                        Provision of Economic research and analysis for manufacturers, government and the organized private sector
                    </p>
                </div>
            </Card>
        </Fourth>
        <Footer/>
    </HowreWeWorkContainer>
  )
}

export default HowWeWork