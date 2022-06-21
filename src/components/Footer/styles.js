import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Container = styled(Flex)`
  min-height: 3em;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 4em 0 2em;
`

export default Container
