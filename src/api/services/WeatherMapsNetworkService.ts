import { REACT_APP_API_KEY } from "../../utils/constants";

class WeatherMapsNetworkService {
  getWeatherMapForClouds = () => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://tile.openweathermap.org/map/clouds_new/4/1/6.png?appid=${REACT_APP_API_KEY}`
      )
        .then((result) => {
          // setData(result)
          resolve(result.url);
        })
        .catch((err) => reject(err));
    });
  };
  getWeatherMapForPrecipitation = () => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://tile.openweathermap.org/map/precipitation_new/4/1/6.png?appid=${REACT_APP_API_KEY}`
      )
        .then((result) => {
          // setData(result)
          resolve(result.url);
        })
        .catch((err) => reject(err));
    });
  };
  getWeatherMapForTemp = () => {
    return new Promise((resolve, reject) => {
     fetch(
        `https://tile.openweathermap.org/map/temp_new/4/1/6.png?appid=${REACT_APP_API_KEY}`
      )
        .then((result) => {
          // setData(result)
          resolve(result.url);
        })
        .catch((err) => reject(err));
    });
  };
}

export default new WeatherMapsNetworkService();