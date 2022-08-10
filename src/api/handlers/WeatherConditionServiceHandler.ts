import WeatherConditionsNetworkService from "../services/WeatherConditionsNetworkService";
import * as propTypes from "../../propTypes/weatherConditions";
export const fetchCurrentWeather = (
  lat: number,
  long: number,
  onSuccess: (arg0:propTypes.currentWeatherConditionsProp) => void
) => {
  WeatherConditionsNetworkService.fetchCurrentWeather(lat, long).then((result) => {
    onSuccess(result as propTypes.currentWeatherConditionsProp);
  });
};
export const fetch7DayWeather = (
  lat: number,
  long: number,
 
  onSuccess: (arg0: any) => void
) => {
  WeatherConditionsNetworkService.fetch7DayWeather(lat, long).then((result:any) => {
    let _7seventdayForecast = result.daily.map(
      (item: {
        temp: { min: any; max: any };
        weather: { main: any }[];
        dt: number;
      }) => ({
        minTemp: item.temp.min,
        maxTemp: item.temp.max,
       
        weatherCondition: item.weather[0].main,
        date: new Date(item.dt * 1000).toDateString(),
      })
    );
    onSuccess(_7seventdayForecast);
  });
};
