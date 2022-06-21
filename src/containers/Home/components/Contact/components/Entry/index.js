import React from 'react'
import { Container, Title, Text } from './styles'

const Entry = ({ title, children }) => (
  <Container>
    <Title>{`${title}: `}</Title>
    <Text>{children}</Text>
  </Container>
)

export default Entry
