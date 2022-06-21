import React from 'react'
import { Container, ImageWrapper, MainImage } from './styles'
import dayImage from './assets/teaTime.jpg'
import nightImage from './assets/night.jpg'
import Info from './components/Info'
import Contact from './components/Contact'
import Resume from './components/Resume'

const Home = () => {
  return (
    <Container>
      <Info />
      <Resume />
    </Container>
  )
}

export default Home
