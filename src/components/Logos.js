import styled from 'styled-components'
import Shopify from '../Assets/Shopify.svg'
import Paypal from '../Assets/Paypal.svg'
import Samsung from '../Assets/Samsung.svg'
import Lenovo from '../Assets/Lenovo.svg'
import Google from '../Assets/Google.svg'
import Slack from '../Assets/Slack.svg'

const Logos = () => {
  return (
    <Container>
      <img src={Shopify} alt='Shopfiy' />
      <img src={Paypal} alt='Shopfiy' />
      <img src={Samsung} alt='Shopfiy' />
      <img src={Lenovo} alt='Shopfiy' />
      <img src={Google} alt='Shopfiy' />
      <img src={Slack} alt='Shopfiy' />
    </Container>
  )
}

export default Logos

const Container = styled.div`
  max-width: min(90%, 1020px);
  margin-inline: auto;
  padding: 8rem 0 4rem 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
