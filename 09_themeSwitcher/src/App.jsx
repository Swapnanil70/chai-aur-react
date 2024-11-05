import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/Theme";
import { useState, useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  }

  // actual change in the theme
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* ThemeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

// Remember: to change the config in tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }