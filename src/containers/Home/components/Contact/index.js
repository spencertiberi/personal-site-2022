import React from 'react'
import { Container, Title, Text } from './styles'
import Entry from './components/Entry'
import copy from '../../../../copy'

const Contact = () => (
  <Container>
    <Title> {copy.contact} </Title>
    <Text>
      <Entry title="Email">spencertiberi@gmail.com</Entry>
      <Entry title="Work Address">
        67 Mt Auburn St,<br />Cambridge, MA 02138
      </Entry>
    </Text>
  </Container>
)

export default Contact
