import styled from 'styled-components'
import Checkmark from '../Assets/Checkmark.svg'

const InfoOptions = () => {
  return (
    <InfoWrapper>
      <Container>
        <Col>
          <h2>For Startups</h2>
          <p>
            Not all companies are big, startups should have just as much
            opportunities as established enterprises.
          </p>
          <ul>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>50% off all plans, forever.</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>
                Receive monthly offers for expert support to help you grow your
                referral program.
              </span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>
                Access to our <u>Founders Hub.</u>
              </span>
            </li>
          </ul>
        </Col>
        <Col>
          <h2>For Enterprises</h2>
          <p>
            Just because your company is huge, doesn’t mean you shouldn’t
            benefit from a referral system.
          </p>
          <ul>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>10% off all plans, forever.</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>
                Free consultation consultations with our Marketing experts.
              </span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>
                Access to our <u>Enterprise Hub.</u>
              </span>
            </li>
          </ul>
        </Col>
      </Container>
    </InfoWrapper>
  )
}

export default InfoOptions

const InfoWrapper = styled.div``

const Container = styled.div`
  max-width: min(90%, 1140px);
  margin-inline: auto;
  padding-block: 8rem;

  display: flex;
  gap: 2rem;

  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  background-color: #242dfe;
  padding: 3.6rem;
  color: #fff;

  h2 {
    font-size: 3.6rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 3.6rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 1.7rem;
  }
`
