/** @jsxImportSource theme-ui */
import { useColorMode } from "theme-ui";

const Toggle = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div
      className="toggle"
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
    >
      {colorMode === "default" ? "☾" : "☉"}
    </div>
  );
};

export default Toggle;
