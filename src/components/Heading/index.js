import React from 'react'
import { Container, Header } from './styles'

const Heading = ({ children, scroll }) => (
  <Container scroll={scroll}>
    <Header>{children}</Header>
  </Container>
)

export default Heading
