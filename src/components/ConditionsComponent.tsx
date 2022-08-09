import React from "react";
import commonStyles from "../styles/common.module.css";
type Props = {
  children?: React.ReactNode;
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  weatherCondition: string;
  date: string;
};
export default function ConditionsComponent(props: Props) {
  const { children, date, currentTemp, minTemp, maxTemp, weatherCondition } =
    props;
  return (
    <div
      className={`${date !== "" && commonStyles.card} ${commonStyles.column} `}
    >
      {date !== "" && <text>{`Date: ${date}`}</text>}
      <text>{`Current Temp: ${currentTemp}`}</text>
      <text>{`Weather Condition: ${weatherCondition} `}</text>
      <text>{`High & Low Temp: ${maxTemp} & ${minTemp}`}</text>
    </div>
  );
}

ConditionsComponent.defaultProps = {
  currentTemp: 0,
  minTemp: 0,
  maxTemp: 0,
  weatherCondition: "",
  date: "",
};
