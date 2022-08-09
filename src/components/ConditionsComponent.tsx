import React from "react";
import commonStyles from "../styles/common.module.css";
type Props = {
  children?: React.ReactNode;
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  weatherCondition: string;
  date: string;
  windSpeed: number;
  pressure: number;
  humidity: number;
  sunrise: string;
  sunset: string;
};
export default function ConditionsComponent(props: Props) {
  const {
    children,
    date,
    currentTemp,
    minTemp,
    maxTemp,
    weatherCondition,
    windSpeed,
    pressure,
    humidity,
    sunrise,
    sunset,
  } = props;

  return (
    <div className={`${!!date && commonStyles.card} ${commonStyles.column} `}>
      {!!date && <text>{`Date: ${date}`}</text>}
      {!!currentTemp && <text>{`Current Temp: ${currentTemp}`}</text>}
      {!!weatherCondition && (
        <text>{`Weather Condition: ${weatherCondition} `}</text>
      )}
      {!!maxTemp && !!minTemp && (
        <text>{`High & Low Temp: ${maxTemp} & ${minTemp}`}</text>
      )}
      {!!windSpeed && <text>{`Wind: ${windSpeed}`}</text>}
      {!!humidity && <text>{`Humidity: ${humidity} `}</text>}
      {!!pressure && <text>{`Pressure: ${pressure}`}</text>}
      {!!sunrise && <text>{`Sunrise: ${sunrise}`}</text>}
      {!!sunset && <text>{`Sunset: ${sunset}`}</text>}
      {children}
    </div>
  );
}

ConditionsComponent.defaultProps = {
  currentTemp: 0,
  minTemp: 0,
  maxTemp: 0,
  weatherCondition: "",
  date: "",
  windSpeed: 0,
  pressure: 0,
  humidity: 0,
  sunrise: "",
  sunset: "",
};
