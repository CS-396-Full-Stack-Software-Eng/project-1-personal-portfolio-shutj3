'use client'
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <button onClick={toggleTheme} className={`px-2 py-2  mt-2 rounded-full ${
        theme === 'light' ? 'bg-dark text-white' : 'bg-light text-black'
        }`}>
    {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
    );
  };
  
  export default ThemeToggle;