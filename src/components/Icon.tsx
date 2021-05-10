import useWeatherDates from '../useWeatherDates';
import last from '../images/leftArrow.png';

function Icon() {
  const {weatherDates, findWeatherDate} = useWeatherDates()
  return (
    <img src={last} alt='last'/>
  )
}

export default Icon ;