import { REACT_APP_API_KEY, REACT_APP_API_URL } from "../../utils/constants";

class WeatherConditionsNetworkService {
  fetchCurrentWeather = (lat: number, long: number) => {
    return new Promise((resolve, reject) => {
      fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  };
  fetch7DayWeather =  (lat:number, long:number) => {
    return new Promise((resolve, reject) => {
      fetch(
        `${REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          // setData(result)
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  };
}
export default new WeatherConditionsNetworkService();
