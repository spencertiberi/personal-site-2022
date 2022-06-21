import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  height: 4em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ${props => (props.scroll ? 'sticky' : 'relative')};
  z-index: 5;
  top: 0;
  width: 100vw;
  background-color: ${props =>
    props.scroll ? ({ theme }) => theme.colors.background : 'trasparent'};
  margin-top: -2.5em;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.ceiling}) {
    margin-top: 0;
  }

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.headerStyle.ceiling}) {
    margin-top: -1.5em;
  }
`

export const Header = styled(Flex)`
  color: ${({ theme }) => theme.colors.mainFont};
  font-size: 4em;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  text-shadow: 3px 3px ${({ theme }) => theme.colors.mainDark};

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.middle.ceiling}) {
    font-size: 3.25em;
  }

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.ceiling}) {
    font-size: 2.5em;
  }
`
