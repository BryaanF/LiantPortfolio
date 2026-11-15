import {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <label
      className="relative inline-flex items-center cursor-pointer w-14 h-7 select-none"
      aria-label="Toggle dark mode"
    >
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeTheme}
        className="sr-only peer"
      />
      <div className="w-14 h-7 bg-[#ccc] peer-checked:bg-[#2196f3] rounded-full transition-colors duration-300 p-0.5 flex items-center">
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-xs ${
            isDark ? "translate-x-7" : "translate-x-0"
          }`}
        >
          {isDark ? "🌜" : "☀️"}
        </div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
