import background from "../images/background.jpg";
import styled from 'styled-components';
import last from '../images/leftArrow.png'
import next from '../images/rightArrow.png'
import useWeatherDates from '../useWeatherDates';
import rain from '../images/rain.png'
import { useState} from 'react';

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
  margin: 0 108px;
  
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
    width: 80%;
    justify-content: space-between;
  }
`

function Weather() {
  const {weatherDates,findWeatherDate}=useWeatherDates()
  const [selectedCity,setSelectedCity]=useState(1)
  const x=findWeatherDate(selectedCity)

  const lastCity=()=>{
    if(selectedCity===1){
      setSelectedCity(selectedCity=>selectedCity+3)
    }else {
      setSelectedCity(selectedCity=>selectedCity-1)
    }
  }
  const nextCity=()=>{
    if(selectedCity===4){
      setSelectedCity(selectedCity=>selectedCity-3)
    }else {
      setSelectedCity(selectedCity=>selectedCity+1)
    }
  }

  return (
    <Div style={{
      backgroundImage:`url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div>
        <Button onClick={lastCity}>
          <img className='last' src={last} alt='last'/>
        </Button>
        <Wrapper>
          <span className='city'>
            {x.city}
          </span>
          <img src={rain} alt="icon"/>
          <span className='now'>{x.temperature}°C</span>
          <div>
            <span className='low'>{x.lowTemperature}°C</span>
            <span className='high'>{x.highTemperature}°C</span>
          </div>
          <span>{x.weatherName}</span>
        </Wrapper>
        <Button onClick={nextCity}>
          <img className='next' src={next} alt="next"/>
        </Button>
      </div>
    </Div>
  )
}

export default Weather ;