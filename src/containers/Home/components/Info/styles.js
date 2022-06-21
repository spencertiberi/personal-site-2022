import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  width: 100vw;
  height: auto;
  z-index: 200;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.main};
  /* background-color: ${({ theme }) => theme.colors.background}; */
  padding: 1em 15vw 8vw 15vw;
  background: transparent;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.ceiling}) {
    padding: 0 15vw 0 15vw;
  }
`

export const Title = styled(Flex)`
  font-size: 3.5em;
  color: ${({ theme }) => theme.colors.mainDark};
  /* background-color: ${({ theme }) => theme.colors.header}; */
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: bold;
  margin-bottom: 0.5em;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.middle.ceiling}) {
    font-size: 2.25em;
  }

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.ceiling}) {
    position: relative;
    font-size: 2em;
  }
`

export const Paragraph = styled(Flex)`
  color: ${({ theme }) => theme.colors.mainDark};

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.ceiling}) {
    flex-direction: column;
    align-items: center;
  }
`

export const Pic = styled.img`
  width: 25vw;
  height: auto;
  margin: 0 1em 1em 0;
  position: sticky;
  top: 4.25em;
  z-index: 50;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.ceiling}) {
    display: none;
  }
`

export const Text = styled.p`
  font-size: 2.5em;
  letter-spacing: 0.05em;
  font-family: ${({ theme }) => theme.fonts.main};
  margin: 0 0 1em 0;
  text-align: justify;
`

export const Image = styled.img`
  width: 20vw;
  height: 20vw;
`