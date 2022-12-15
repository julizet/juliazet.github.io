/** @jsxImportSource theme-ui */
import { useColorMode } from "theme-ui";

const Toggle = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div
      class="toggle"
      onClick={() => setColorMode(colorMode === "default" ? "dark" : "default")}
      sx={{
        fontWeight: "bold",
        marginBottom: 2,
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      {colorMode === "default" ? "☾" : "☉"}
    </div>
  );
};

export default Toggle;
