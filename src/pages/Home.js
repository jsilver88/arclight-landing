import styled from 'styled-components'

import Logos from '../components/Logos'
import Dashboard from '../components/Dashboard'
import InfoOptions from '../components/InfoOptions'
import Hero from '../components/Hero'
import PricingCards from '../components/PricingCards'

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <Hero />
        <Logos />
      </Container>
      <Dashboard />
      <InfoOptions />
      <PricingCards />
    </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled.div``

const Container = styled.div`
  max-width: min(90%, 1140px);
  margin: 14rem auto 0 auto;
`
