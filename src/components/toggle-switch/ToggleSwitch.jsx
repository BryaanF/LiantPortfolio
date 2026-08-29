import {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <label className="switch">
      <input type="checkbox" checked={isDark} onChange={changeTheme} />
      <span className="slider round">
        <span className="emoji">{isDark ? "🌜" : "☀️"}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
