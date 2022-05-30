import React from 'react'
import styled from 'styled-components'
import TextTransition, { presets } from "react-text-transition";
import AnimatedText from 'react-animated-text-content';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    position: relative;
    overflow: hidden;
    .shadow{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: #000000c1;
        z-index: 10;
    }
    span{
      @media (max-width:480px) {
        margin-top: 30%;
        font-size: 1rem;
      }
      top: 30%;
      padding-top: 5%;
      font-size: 5vw;
      color: #fff;
      z-index:13;
      font-family: 'Roboto Flex', sans-serif;
    }
    a{
      @media (max-width:480px) {
        margin-top: 30%;
        font-size: 1.5rem;
        top: 50%;
        margin-left: 5%;
      }
      transform: translate(-50%,-50%);
      position: absolute;
      font-size: 2vw;
      text-decoration: none;
      top: 80%;
      left: 10.5%;
      padding:1.5% 4%;
      background: #03030c;
      color: #fff;
      border: none;
      z-index: 13;
      transform: translate(-50%,-50%);
      border-radius: 12px;
      transition: all .2s linear;
      &:hover{
        background:#fff;
        color: #03030c;
      }
    }
`
const Land = styled.video`
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100vh;
    /* Make video to at least 100% wide and tall */
    min-width: 100%; 
    min-height: 100%; 
    /* Setting width & height to auto prevents the browser from stretching or squishing the video */
    width: auto;
    height: auto;
    /* Center the video */
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%,-50%);
`

const Logo = styled.div`
@media (max-width:480px) {
  width: 15%;
  height: 5%;
}
  width: 230px;
  height: 100px;
  margin-left:5%;
  background: url(${logo});
  background-size: cover;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
`
const Text = styled.h1`
@media (max-width:480px) {
  font-size: 1.2rem;
  top: 30%;
}
  position: absolute;
  top: 50%;
  margin-bottom: 5%;
  left: 5%;
  color: #fff;
  font-size: 3vw;
  z-index:13;
  font-family: 'Roboto Flex', sans-serif;
`
const Btnn = styled.button`
  
`
const TEXTS = [
  "Our Vision:",
  'To Be Key Driver For Industrialization And Sustainable Economic growth in Nigeria',
  "Our Mission:",
  "To Promote and Protect Manufacturers Interest",
  "Core Values:",
  "Service, Engagement, Resilience, Value Addition, Commitment, Integrity"
];


function LandingPage() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        5000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  return (
    <Container>
        <div className="shadow"></div>
        <Land autoPlay muted loop id="myVideo">
            <source src="bgv.mp4" type="video/mp4"/>
        </Land>

        <Logo></Logo>
        <span>
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out',
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="h1"
          className="animated-paragraph1"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Manufacturing Company of Nigeria
        </AnimatedText>
        </span>
        <Text>
        <TextTransition
            text={ TEXTS[index % TEXTS.length] }
            springConfig={ presets.gentle }
        />
        </Text>
        <Btnn>
         <Link to="/home">Dive in</Link> 
        </Btnn>
    </Container>
  )
}

export default LandingPage