export type currentWeatherConditionsProp = {
    name: string;
    main: {temp: number; temp_min: number; temp_max: number,humidity: number,pressure: number};
    weather: {main: string; icon: string}[];
    sys: {sunrise: number; sunset: number};
    wind: {speed: number};
  }