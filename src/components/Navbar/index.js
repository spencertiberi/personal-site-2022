import React, { Component } from 'react'
import {
  Container,
  Desktop,
  Icon,
  Logo,
  Menu,
  Mobile,
  NavItem,
  NavItems,
  LogoContainer,
  Image,
  MountainContainer
} from './styles'
import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import logo from './Signature.png'
import ellie from './elliedrawing.jpg'
import mountain1 from './mountainLight.png'
import mountain2 from './mountainDark.png'

const time = () => {
  const today = new Date()
  const currTime = today.getHours()
  return currTime > 7 && currTime < 19
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const Mountains = () => (
  <MountainContainer>
    <Image src={time() ? mountain1 : mountain2} left="-3vw" />
    {/* <Image src={mountain3} top="-17vw" left="-1vw" /> */}
  </MountainContainer>
)


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisable: false
    }
  }

  render() {
    return (
      <>
        <Container>
          <Desktop>
            <LogoContainer>
              <Logo src={logo} alt="Spencer Tiberi Logo" />
            </LogoContainer>
            <Mountains />
          </Desktop>
        </Container>
        <Mobile>
          <Logo src={logo} alt="Spencer Tiberi Logo" />
        </Mobile>
      </>
    )
  }
}

export default withRouter(Navbar)
