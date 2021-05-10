import background from "../images/background.jpg";
import styled from 'styled-components';
import last from '../images/leftArrow.png'
import next from '../images/rightArrow.png'
import useWeatherDates from '../useWeatherDates';
import rain from '../images/rain.png'

const Div=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  >div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Button=styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >.last{
    margin-right: 72px;
  }
  >.next{
    margin-left: 72px;
  }
  
  >img{
    width: 48px;
    height: 48px;
  }
`
const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >.city{
    font-size:36px;
    margin-bottom: 36px;
  }

  >img{
  width: 156px;
  height: 128px;
}
  >.now{
    margin-top: 12px;
  }
  >div{
    margin: 12px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`

function Weather() {
  const {weatherDates,findWeatherDate}=useWeatherDates()
  return (
    <Div style={{
      backgroundImage:`url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div>
        <Button>
          <img className='last' src={last} alt='last'/>
        </Button>
        <Wrapper>
          <span className='city'>Sydney</span>
          <img src={rain} alt="rain"/>
          <span className='now'>19°C</span>
          <div>
            <span className='low'>16°C</span>
            <span className='high'>22°C</span>
          </div>
          <span>Rain</span>
        </Wrapper>
        <Button>
          <img className='next' src={next} alt="next"/>
        </Button>
      </div>
    </Div>
  )
}

export default Weather ;