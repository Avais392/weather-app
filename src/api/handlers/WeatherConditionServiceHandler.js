import WeatherConditionsNetworkService from "../services/WeatherConditionsNetworkService";

export const fetchCurrentWeather = (
  lat: number,
  long: number,
  onSuccess: (arg0: unknown) => void
) => {
  WeatherConditionsNetworkService.fetchCurrentWeather(lat, long).then((result) => {
    console.log('goops,',result);
    onSuccess(result);
  });
};
export const fetch7DayWeather = (
  lat: number,
  long: number,
 
  onSuccess: (arg0: unknown) => void
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
