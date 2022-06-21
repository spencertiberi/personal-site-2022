import React, { Component } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './containers/Home/'
import Navbar from './components/Navbar/'
import Footer from './components/Footer'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Container>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Container>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
