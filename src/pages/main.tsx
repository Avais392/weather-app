import React, { useEffect, useState } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import * as SearchServiceHandler from "../api/handlers/SearchServiceHandler";
import * as WeatherConditionsServiceHandler from "../api/handlers/WeatherConditionServiceHandler";
import * as WeatherMapsServiceHandler from "../api/handlers/WeatherMapsServiceHandler";
import commonStyles from "../styles/common.module.css";
import { REACT_APP_API_KEY, REACT_APP_API_URL } from "../utils/constants";
import ConditionsComponent from "../components/ConditionsComponent";
import SearchComponent from "../components/SearchComponent";
function MainPage(this: any) {
  const [search, setSearch] = React.useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [weatherConditionIcon, setWeatherConditionIcon] = useState("");
  const [currentTemp, setCurrentTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [locationName, setLocationName] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [windSpeed, setWindSpeed] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [sevendayForecast, set7dayForecast] = useState([]);
  const [celsiusTemp, setCelsiusTemp] = useState(0);
  const [fahrenheitTemp, setFahrenheitTemp] = useState(32);
  const [weatherMap, setWeatherMap] = useState("");
  const [expandedView, setExpandedView] = useState(false);
  const onChangeCelsiusTemp = (e: any) => {
    setCelsiusTemp(e.target.value);
    setFahrenheitTemp((e.target.value * 9) / 5 + 32);
  };
  const onChangeFahrenheitTemp = (e: any) => {
    setFahrenheitTemp(e.target.value);
    setCelsiusTemp(((e.target.value - 32) * 5) / 9);
  };
  const onSuccesWeatherMap = (url: string) => {
    setWeatherMap(url);
  };
  const getWeatherMapForClouds = () => {
    WeatherMapsServiceHandler.getWeatherMapForClouds(onSuccesWeatherMap);
  };
  const getWeatherMapForPrecipitation = async () => {
    WeatherMapsServiceHandler.getWeatherMapForPrecipitation(onSuccesWeatherMap);
  };
  const getWeatherMapForTemp = async () => {
    WeatherMapsServiceHandler.getWeatherMapForTemp(onSuccesWeatherMap);
  };

  const handleChange = (event: { target: { value: any } }) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fetchWeatherByLocation();
  };

  const onSuccessCurrentWeather = (result: any) => {
    setLocationName(result.name);
    setCurrentTemp(result.main.temp);
    setMinTemp(result.main.temp_min);
    setMaxTemp(result.main.temp_max);
    setWeatherCondition(result.weather[0].main);
    setWeatherConditionIcon(
      `http://openweathermap.org/img/w/${result.weather[0].icon}.png`
    );
    setHumidity(result.main.humidity);
    setPressure(result.main.pressure);
    setWindSpeed(result.wind.speed);
    setSunrise(new Date(result.sys.sunrise * 1000).toUTCString());
    setSunset(new Date(result.sys.sunset * 1000).toUTCString());
  };
  const fetchCurrentWeather = (lat: number, long: number) => {
    WeatherConditionsServiceHandler.fetchCurrentWeather(
      lat,
      long,
      onSuccessCurrentWeather
    );
  };
  const onSuccess7DayWeather = (_7seventdayForecast: any) => {
    set7dayForecast(_7seventdayForecast);
  };
  const fetch7DayWeather = (lat: number, long: number) => {
    WeatherConditionsServiceHandler.fetch7DayWeather(
      lat,
      long,
      onSuccess7DayWeather
    );
  };
  const onSuccessWeatherByLocation = (result: any) => {
    setLocationName(result.name);
    setLong(result.lon);
    setLat(result.lat);
    fetchCurrentWeather(result.lat, result.lon);
    fetch7DayWeather(result.lat, result.lon);
  };
  const fetchWeatherByLocation = async () => {
    SearchServiceHandler.search(search, onSuccessWeatherByLocation);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLat(position.coords?.latitude);
        setLong(position.coords?.longitude);
      },
      function (error) {
        console.log("error->", error);
      },
      {
        timeout: 5000,
      }
    );
  }, []);
  useEffect(() => {
    fetchCurrentWeather(lat, long);
    fetch7DayWeather(lat, long);
    getWeatherMapForClouds();
  }, [lat, long]);
  return (
    <div className={commonStyles.PageLayout}>
    
      <SearchComponent placeholder="Place" onSubmit={handleSubmit} onChange={handleChange} search={search}></SearchComponent>
      <div className={commonStyles.row}>
        <div className={commonStyles.column}>
          <div className={`${commonStyles.card}`}>
            <text className={commonStyles.h2}>
              {" "}
              {`Today’s Forecast for ${locationName}`}
            </text>

            <div className={commonStyles.row}>
              <ConditionsComponent
                currentTemp={currentTemp}
                weatherCondition={weatherCondition}
                minTemp={minTemp}
                maxTemp={maxTemp}
              ></ConditionsComponent>

              <img src={weatherConditionIcon} alt="new" />
            </div>
            <button onClick={() => setExpandedView(!expandedView)}>
              Click Here! To toggle expanded view for more details.
            </button>

            {expandedView && (
              <div className={commonStyles.column}>
                <text>{`Wind: ${windSpeed}`}</text>
                <text>{`Humidity: ${humidity} `}</text>
                <text>{`Pressure: ${pressure}`}</text>
                <text>{`Sunrise: ${sunrise}`}</text>
                <text>{`Sunset: ${sunset}`}</text>
              </div>
            )}
          </div>

          <div className={`${commonStyles.card}`}>
            <text className={commonStyles.h2}>
              {`Weekly Forecast for ${locationName}`}
            </text>
            <div
              className={`${commonStyles.row} ${commonStyles.horizontalScroll}`}
            >
              {sevendayForecast.map((item: any) => (
                <ConditionsComponent
                  date={item.date}
                  currentTemp={currentTemp}
                  weatherCondition={item.weatherCondition}
                  minTemp={item.minTemp}
                  maxTemp={item.maxTemp}
                ></ConditionsComponent>
              ))}
            </div>
          </div>
        </div>
        <div className={commonStyles.column}>
          <div className={`${commonStyles.card}`}>
            map
            <div className={`${commonStyles.row}`}>
              <button onClick={getWeatherMapForClouds}>Clouds</button>
              <button onClick={getWeatherMapForPrecipitation}>
                Precipitation
              </button>

              <button onClick={getWeatherMapForTemp}>Temp</button>
            </div>
            <div>
              <img src={weatherMap} alt="new" />
            </div>
          </div>
          <div className={`${commonStyles.card}`}>
            <text className={commonStyles.h2}>Temperature Converter</text>
            <div className={`${commonStyles.row}`}>
              <label>
                Celsius:
                <input
                  className={commonStyles.fullWidth}
                  placeholder=" Celsius:"
                  type="number"
                  value={celsiusTemp}
                  onChange={onChangeCelsiusTemp}
                />
              </label>
              <label>
                Fahrenheit:
                <input
                  className={commonStyles.fullWidth}
                  placeholder=" Fahrenheit:"
                  type="number"
                  value={fahrenheitTemp}
                  onChange={onChangeFahrenheitTemp}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
