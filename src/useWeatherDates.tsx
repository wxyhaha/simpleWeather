import { useState} from 'react';
import cloudy from './images/cloudy.png'
import rain from './images/rain.png'
import snow from './images/snow.png'
import sunny from './images/sunny.png'


const useWeatherDates = () => {
  const cloudyIcon=Buffer.from(cloudy).toString('base64');
  const rainIcon=Buffer.from(rain).toString('base64');
  const snowIcon=Buffer.from(snow).toString('base64');
  const sunnyIcon=Buffer.from(sunny).toString('base64');
  const [weatherDates, setWeatherDates] = useState([
    {id: 1, city: 'Sydney', weatherIcon:rainIcon,weatherName:'Light Rain', temperature:19, lowTemperature:16, highTemperature:22},
    {id: 2, city: 'Brisbane', weatherIcon:sunnyIcon,weatherName:'Sunny', temperature:22, lowTemperature:18, highTemperature:24},
    {id: 3, city: 'Melbourne', weatherIcon:cloudyIcon,weatherName:'Cloudy', temperature:15, lowTemperature:12, highTemperature:18},
    {id: 4, city: 'Perth', weatherIcon:snowIcon,weatherName:'Snow', temperature:-3, lowTemperature:-5, highTemperature:3}
  ]);
  const findWeatherDate = (id: number) => weatherDates.filter(t => t.id === id)[0];

  return {weatherDates, setWeatherDates, findWeatherDate};
};

export default useWeatherDates;