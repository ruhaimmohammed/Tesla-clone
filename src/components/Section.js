import React from 'react'
import styled from "styled-components"

function Section() {
    return (
        <Wrap>
            <Itemtext>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </Itemtext>
            <Buttons>
                <ButtonGroup>
                    <Leftbutton>
                        Custom Order
                    </Leftbutton>
                    <RightButton>
                        Existing Inventory
                    </RightButton>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
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
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px; 
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(Leftbutton)`
    background-color: white;
    opacity: 0.80;
    color: black;

`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 30px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;

`

const Buttons = styled.div``