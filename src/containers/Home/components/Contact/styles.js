import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  width: 100vw;
  height: auto;
  z-index: 200;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.main};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1em 15vw 1em 15vw;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    padding: 0 15vw 0 15vw;
  }
`

export const Title = styled(Flex)`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 0.25em;
  z-index: 250;
  position: sticky;
  top: 0;

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

export const Text = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
