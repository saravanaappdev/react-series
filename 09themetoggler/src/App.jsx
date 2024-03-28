import { useEffect, useState } from "react";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import Card from "./components/Card";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  }

  const lightTheme = () => {
    setThemeMode('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-col justify-center items-center gap-4 p-5">
        <ThemeToggle />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
