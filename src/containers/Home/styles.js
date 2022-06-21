import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.background}; */
  background: transparent;
`

export const ImageWrapper = styled(Flex)`
  position: relative;
  min-height: 60vw;
  width: 100vw;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.ceiling}) {
    justify-content: center;
    align-items: center;
  }
`

export const MainImage = styled.img`
  position: absolute;
  z-index: 50;
  width: 100vw;
  height: auto;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.ceiling}) {
    position: relative;
    right: 0;
  }
`
