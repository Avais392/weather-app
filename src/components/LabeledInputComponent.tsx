import React from "react";
import commonStyles from "../styles/common.module.css";
type Props = {
  onChange: (event: { target: { value: any } }) => void;
  value: string | number;
  placeholder: string;
  type: string;
  label: string;
};
export default function LabeledInputComponent(props: Props) {
  const { onChange, value, placeholder, type, label } = props;
  return (
    <label>
      {label}
      <input
        className={commonStyles.fullWidth}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
