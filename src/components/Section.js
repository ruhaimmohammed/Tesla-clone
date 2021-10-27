import React from 'react'
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Opacity } from '@material-ui/icons'

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg} >
            <Fade bottom>
                <Itemtext>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </Itemtext>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>

                        <Leftbutton className={props.title == "Accessories" ? "accBtn" : "leftBtn"} >
                            {props.leftBtnText}
                        </Leftbutton>

                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                        }

                    </ButtonGroup>
                    
                </Fade>
                {props.title == "Model S" &&
                            <DownArrow src="/images/down-arrow.svg" />
                        }


            </Buttons>
            
            {props.title == "Accessories" &&
                <FooterDetails>
                    <li>Tesla &copy; 2021</li>
                    <li>Privacy & Legal</li>
                    <li>Contact</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Engage</li>
                    <li>Locations</li>
                </FooterDetails>
            }
        </Wrap>
    )
}

export default Section


const Wrap = styled.div`
    width: 100vw;
    height:100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};

`

const Itemtext = styled.div`
    padding-top: 10vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }

`

const Leftbutton = styled.div`
    height: 40px; 
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;
    
    @media (max-width: 768px){
        width: 310px;
    }

`

const RightButton = styled(Leftbutton)`
    background-color: white;
    opacity: 0.80;
    color: black;

`

const DownArrow = styled.img`
    margin-top: 10px;
    margin-bottom: 20px;
    height: 45px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;

`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ButtonWrap = styled.div``


const FooterDetails = styled.div`
    display: flex;
    padding-bottom: 15px;
    li{
        list-style: none;
        font-size: 15px;
        margin: 8px;
    }
`