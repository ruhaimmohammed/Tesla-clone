import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="https://www.tesla.com/models">Model S</a>
                <a href="https://www.tesla.com/model3">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panel</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true) }/>
            </RightMenu>
            <BurgerNav show={burgerStatus} > 
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)} />
                </CloseWrapper>
                {window.innerWidth <=900 ? <Hello>
                {cars && cars.map((car, index) => 
                    <li key={index}><a href="">{ car }</a> </li>
                ) }
                <li><a href="#">Existing Inventory</a> </li>
                <li><a href="#">Used Inventory</a> </li>
                <li><a href="#">Trade-in</a> </li>
                <li><a href="#">Cybertruck</a> </li>
                <li><a href="#">Roadstar</a> </li>
                </Hello> :
                <Hello>
                <li><a href="#">Existing Inventory</a> </li>
                <li><a href="#">Used Inventory</a> </li>
                <li><a href="#">Trade-in</a> </li>
                <li><a href="#">Cybertruck</a> </li>
                <li><a href="#">Roadstar</a> </li>
                </Hello>
                
            }
            </BurgerNav>

        </Container>

    )
}

export default Header


const Container = styled.div`
     min-height: 60px;
     position: fixed;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 20px;
     top: 0;
     left: 0;
     right: 0;
     z-index: 1;

`

const Menu = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    flex: 1; 

    a{
        font-size: 20px;
        font-weight: 600;
        text-transform: uppercase;
        padding: 0px 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 1000px){
        a{
            font-size: 14px;
        }
    }
    @media(max-width: 900px){
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
    @media(max-width: 1000px){
        a{
            font-size: 1px;
        }
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px; 
    z-index: 500;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0%)': 'translateX(100%)' };
    transition: transform 0.2s ;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
    a{
        font-weight: 600;
        font-size: 18px;
    }

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;

`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;

`

const Hello = styled.div`

`