import styled from 'styled-components'
import styles from '../App.module.css'
import Play from '../Assets/Play.svg'
import HeroImg from '../Assets/Map.svg'
import User1 from '../Assets/user01.svg'
import User2 from '../Assets/user02.svg'
import User3 from '../Assets/user03.svg'
import Star from '../Assets/Star.svg'

const Hero = () => {
  return (
    <HeroWrapper>
      <Col>
        <h1>Affiliate tracking software shouldn’t cost an arm and a leg.</h1>
        <p>
          Keep track of all your affiliate marketing campaigns in one place, and
          analyze how well they are doing. Best part? It doesn’t cost an arm and
          a leg.
        </p>
        <ButtonWrapper>
          <button className={styles.btn}>Get started — it’s free</button>
          <button className={styles.btnWhite}>
            <img src={Play} alt='play button' /> <span>How It Works</span>
          </button>
        </ButtonWrapper>
        <ReviewWrapper>
          <div>
            <img src={Star} alt='star' />
            <img src={Star} alt='star' />
            <img src={Star} alt='star' />
            <img src={Star} alt='star' />
            <img src={Star} alt='star' />
          </div>
          <p>
            5/5 • <span>AlternativeTo Reviews</span>
          </p>
        </ReviewWrapper>
      </Col>
      <Col>
        <img src={HeroImg} alt='map' className='map' />
        <CardWrapper>
          <Card>
            <img src={User2} alt='avatar 1' />
            <h4>Sara</h4>
            <p>🇧🇪 Belgium</p>
          </Card>
          <Card>
            <img src={User3} alt='avatar 2' />
            <h4>David</h4>
            <p>🇺🇸 United States</p>
          </Card>
          <Card>
            <img src={User1} alt='avatar 3' />
            <h4>Isabella</h4>
            <p>🇬🇧 United Kingdom</p>
          </Card>
        </CardWrapper>
      </Col>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 968px) {
    flex-direction: column-reverse;
  }
`

const Col = styled.div`
  position: relative;

  h1 {
    font-size: 5.6rem;
    line-height: 6.7rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-family: 'Merriweather', serif;
    font-size: 1.8rem;
    line-height: 2.7rem;
    margin-bottom: 2.4rem;
  }

  .map {
    max-width: 45rem;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 3.6rem;
      line-height: 4.3rem;
    }

    .map {
      max-width: 36rem;
    }
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-bottom: 3.6rem;

  @media screen and (max-width: 500px) {
    button {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
`

const ReviewWrapper = styled.div`
  display: flex;
  color: #595959;

  div {
    margin-right: 2rem;
  }

  span {
    color: #000;
    font-weight: bold;
    text-decoration: underline;

    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`

const CardWrapper = styled.div``

const Card = styled.article`
  padding: 1.6rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 4px 100px rgba(36, 45, 254, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;

  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #000;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 0;
    color: #595959;
  }

  &:nth-child(1) {
    top: -3rem;
    left: 17rem;
    transform: matrix(0.97, -0.26, 0.26, 0.97, 0, 0);
  }

  &:nth-child(2) {
    bottom: 2rem;
    left: 0;
    transform: matrix(0.98, 0.21, -0.21, 0.98, 0, 0);
  }

  &:nth-child(3) {
    bottom: -0.5rem;
    right: 0;
    transform: matrix(0.97, -0.26, 0.26, 0.97, 0, 0);
  }

  @media screen and (max-width: 500px) {
    &:nth-child(1) {
      top: -5rem;
      left: 14rem;
    }

    &:nth-child(2) {
      bottom: 6rem;
      left: 2rem;
    }

    &:nth-child(3) {
      bottom: 2rem;
      right: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`
