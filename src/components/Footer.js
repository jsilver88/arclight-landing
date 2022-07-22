import React from 'react'
import WhiteLogo from '../Assets/Logo White.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Col>
          <img src={WhiteLogo} alt='Arclight Logo' />
          <p>
            Keep track of all your affiliate marketing campaigns in one place,
            and analyze how well they are doing. Best part? It doesn’t cost an
            arm and a leg.
          </p>
        </Col>
        <Col>
          <h2>Company</h2>
          <ul>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/'>Careers</Link>
            </li>
            <li>
              <Link to='/'>Contact Us</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <h2>Services</h2>
          <ul>
            <li>
              <Link to='/'>API</Link>
            </li>
            <li>
              <Link to='/'>Customization</Link>
            </li>
            <li>
              <Link to='/'>Marketplace</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <h2>Resources</h2>
          <ul>
            <li>
              <Link to='/'>Blog</Link>
            </li>
            <li>
              <Link to='/'>Case Studies</Link>
            </li>
            <li>
              <Link to='/'>Press</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <h2>Privacy</h2>
          <ul>
            <li>
              <Link to='/'>Terms & Conditions</Link>
            </li>
            <li>
              <Link to='/'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/'>User Agreement</Link>
            </li>
          </ul>
        </Col>
      </Container>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  background-color: #242dfe;
`

const Container = styled.div`
  max-width: min(90%, 1140px);
  margin-inline: auto;
  padding-block: 8rem;

  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const Col = styled.div`
  p {
    margin-top: 2.4rem;
    color: #fff;
    font-family: 'Merriweather', serif;
    font-size: 1.8rem;
    max-width: 42rem;
  }

  h2 {
    font-family: 'Bitter', serif;
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 2.4rem;
  }

  li {
    margin-bottom: 1.2rem;
  }

  a {
    color: #e7e8fe;

    &:hover {
      color: #fff;
    }
  }

  @media screen and (max-width: 968px) {
    margin-bottom: 2rem;
  }
`
