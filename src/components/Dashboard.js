import styled from 'styled-components'
import Phone from '../Assets/Dashboard.png'
import Checkmark from '../Assets/Checkmark.svg'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Container>
        <Col>
          <img src={Phone} alt='Phone with dashboard' />
        </Col>
        <Col>
          <h2>A powerful dashboard that tracks everything.</h2>
          <p>
            Decisions should be powered by data, and there’s no better way to
            collect good data than our powerful dashboard.
          </p>
          <ul>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Create and manage custom referral links.</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>A/B test your campagins for more accurate results.</span>
            </li>
            <li>
              <img src={Checkmark} alt='Checkmark' />{' '}
              <span>Track all your campaigns.</span>
            </li>
          </ul>
        </Col>
      </Container>
    </DashboardWrapper>
  )
}

export default Dashboard

const DashboardWrapper = styled.div`
  background-color: #242dfe;
  padding-top: 8rem;
`

const Container = styled.div`
  max-width: min(90%, 1140px);
  margin-inline: auto;

  display: flex;

  @media screen and (max-width: 968px) {
    flex-direction: column-reverse;
  }
`

const Col = styled.div`
  flex: 1;
  color: #fff;

  h2 {
    font-size: 3.6rem;
    line-height: 4.3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #e7e8fe;
    margin-bottom: 3.6rem;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1.7rem;
    gap: 1.6rem;
  }
`
