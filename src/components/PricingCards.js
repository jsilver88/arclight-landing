import styled from 'styled-components'
import styles from '../App.module.css'
import Checkmark from '../Assets/Vector.svg'
import CheckmarkWhite from '../Assets/Checkmark.svg'

const PricingCards = () => {
  return (
    <PricingCardWrapper>
      <Container>
        <Col>
          <p>Basic</p>
          <h2>
            $39<span>/mo</span>
          </h2>
          <p>Suited for startups who are just starting out.</p>
          <ul>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Unlimited customers</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Dashboard & reports</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Live chat support</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Fraud Management</span>
            </li>
          </ul>
          <button className={styles.btn}>Subscribe</button>
        </Col>
        <Col>
          <p>Starter</p>
          <h2>
            $59<span>/mo</span>
          </h2>
          <p>Suited for those experimenting with referral programs.</p>
          <ul>
            <li>
              <img src={CheckmarkWhite} alt='CheckmarkWhite' />{' '}
              <span>Migration services</span>
            </li>
            <li>
              <img src={CheckmarkWhite} alt='CheckmarkWhite' />{' '}
              <span>Onboarding manager</span>
            </li>
            <li>
              <img src={CheckmarkWhite} alt='CheckmarkWhite' />{' '}
              <span>Automatic features</span>
            </li>
            <li>
              <img src={CheckmarkWhite} alt='CheckmarkWhite' />{' '}
              <span>Mass actions</span>
            </li>
          </ul>
          <button className={styles.btn}>Subscribe</button>
        </Col>
        <Col>
          <p>Pro</p>
          <h2>
            $129<span>/mo</span>
          </h2>
          <p>Suited for enterprises with established referral systems.</p>
          <ul>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>All previous plans plus:</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Remove 'Powered by' logo</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Expert 1-on-1s</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Unlimited referral links</span>
            </li>
          </ul>
          <button className={styles.btn}>Subscribe</button>
        </Col>
      </Container>
    </PricingCardWrapper>
  )
}

export default PricingCards

const PricingCardWrapper = styled.div`
  padding-bottom: 8rem;
`

const Container = styled.div`
  max-width: min(90%, 1140px);
  margin-inline: auto;

  display: flex;
  gap: 8rem;

  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  padding: 3.6rem;

  &:nth-child(2) {
    background-color: #242dfe;
    border-radius: 1rem;

    h2 {
      color: #fff;

      span {
        color: #e7e8fe;
      }
    }

    p {
      color: #e7e8fe;
    }

    li {
      color: #e7e8fe;
    }

    button {
      background-color: #e7e8fe;
      color: #242dfe;
    }
  }
  p {
    font-size: 1.8rem;
    color: #595959;
    line-height: 2.7rem;
  }

  h2 {
    font-size: 5.6rem;
    font-weight: bold;
    margin-bottom: 1rem;

    span {
      font-size: 1.8rem;
      color: #9fa5b6;
      font-weight: 400;
    }
  }

  ul {
    margin-top: 2.4rem;
  }

  li {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 1.6rem;

    img {
      width: 2.4rem;
    }
  }

  button {
    width: 100%;
    font-weight: bold;
  }
`
