import React from "react";
import commonStyles from "../styles/common.module.css";
type Props = {
  children?: React.ReactNode;
  onSubmit: (event: { preventDefault: () => void }) => void;
  onChange: (event: { target: { value: any } }) => void;
  search: string;
  placeholder: string;
};
export default function SearchComponent(props: Props) {
  const { children, onSubmit, onChange, search, placeholder } = props;
  return (
    <form className={`${commonStyles.row}`} onSubmit={onSubmit}>
      <label className={`${commonStyles.row} ${commonStyles.flex1}`}>
        Search:
        <input
          className={`${commonStyles.flex1}`}
          placeholder="Place "
          type="text"
          value={search}
          onChange={onChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
SearchComponent.defaultProps = {
  search: "",
  placeholder: "",
  onSubmit: () => {},
  onChange: () => {},
};
