import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import lightbulb from './lightbulb.png'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: auto;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainDark};
  background: transparent;
  /* background: #6f6c87; */
`

export const Grid = styled(Flex)`
  height: auto;
  width: 100%;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;
  z-index: 200;
`

export const Item = styled(Flex)`
    width: 20vw;
    height: auto;
    margin: 15px 15px;
    background: ${props => props.bgcolor || 'transparent'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${props => props.shift};
    font-weight: Bold;
    
    :hover {
      color: ${props => props.hiColor || 'inherit'};
      text-shadow: ${props => `0 0 2em ${props.hiColor}`};
   
      .eduimage {
        opacity: 0.7;
      }
    }
`

export const ContainerImage = styled(Flex)`
    width: 10vw;
    height: 20vw;
    padding: 12vw 2vw 2vw;
    background-image: url(${lightbulb});
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;

    .itemdetail {
      opacity: 0;
    }

    :hover {
      background-color: rgba(255, 255, 50, 0.4);
      box-shadow: 0 1vw 3vw 5vw rgba(255, 255, 50, 0.4);
      border: hidden;
      border-radius: 80% 80% 40% 40%;

      .itemimage {
        opacity: 0.075;
      }

      .itemdetail {
        opacity: 1;
     }
    }
`

export const ItemImage = styled.img`
    width: ${props => props.big ? 'auto' : '6vw;'}
    height: ${props => props.big ? '6vw' : 'auto'};
    max-width: ${props => props.big ? '250px' : '175px'}; 
    opacity: ${props => props.faded ? '0.75' : '1'};
`

export const Line = styled(Flex)`
  flex-direction: row;
  
  width:100vw;
`

export const FloatingImage = styled.img`
    height: auto;
    width: ${props => props.size || '42%'};
    position: relative;
    z-index: 0;
    top: ${props => props.top};
    left: ${props => props.left};
`

export const Institution = styled(Flex)`
font-size: 2vw;
font-weight: 400;
white-space: pre;
`

export const Title = styled(Flex)`
  font-size: 2.25vw;
`

export const Concentration = styled(Flex)`
font-size: 1.5vw;
font-weight: 400;
`

export const Dates = styled(Flex)`
font-size: 1.5vw;
font-weight: 400;
`

export const ItemDetail = styled(Flex)`
  font-size: 1.25vw;
  color: ${({ theme }) => theme.colors.mainFlipped};
  position: absolute;
  width: 8vw;
`