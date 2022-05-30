import React from 'react'
import styled from 'styled-components'
import AnimatedText from 'react-animated-text-content';

const Foot = styled.footer`
    width: 100%;
    height: 85vh;
    background:#03030c;
    margin-top: 5%;
    padding: 2%;
`
const Top = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 1%;
`
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    width: 100%;
    height: 50%;
    margin-top: 5%;
    p{
        font-size: 1.5vw;
    }
`
const Left = styled.div`
    width: 50%;
    height: 100%;
    padding-left: 1%;
`
const Right = styled.div`
    width: 50%;
    height: 100%;
`
function Footer() {
  return (
    <Foot>
        <Top>
            <Left>
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
                        tag="h2"
                        className="animated-paragraph3"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        About Us
                </AnimatedText>

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
                        tag="p"
                        className="animated-paragraph2"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        The Manufacturers Association of Nigeria (MAN) was established in May, 1971 as a company limited by guarantee. The establishment of the Association was motivated by the desire to have a focal point of communication and consultation between industry on the one hand, and the government and general public on the other..
                </AnimatedText>
            </Left>
            <Right>
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
                        tag="h2"
                        className="animated-paragraph1"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Contact Our National Secretariat
            </AnimatedText>
            <ul className='ul'>
                <li>7, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria</li>
                <li>01-4542700, 01-4542701</li>
                <li>info@manufacturersnigeria.org</li>
                <li>View Our Branch Offices</li>
            </ul>
            </Right>
        </Top>
        <Bottom>
            <p>© 2022 The Manufacturers Association of Nigeria (MAN). All Rights Reserved.</p>
            <p>Powered By: Rogue-Codes Technologies</p>
        </Bottom>
    </Foot>
  )
}

export default Footer