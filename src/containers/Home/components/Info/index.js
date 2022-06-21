import React from 'react'
import { Container, Text, Title, Paragraph, Image } from './styles'
import copy from '../../../../copy'
import ellie from './ellie.png'

const Info = () => (
  <Container>
    <Title> {copy.hello} </Title>
    <Paragraph>
      <Image src={ellie} height="450px" />
      <Text>{copy.bio}</Text>
    </Paragraph>
  </Container>
)

export default Info
