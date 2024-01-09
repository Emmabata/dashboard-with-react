import { useState } from 'react';
import './App.css'
import Navigation from './Components/NavigationTemplate/Navigation';
import { ThemeContext } from './ThemeContext';
import Main from './Main/main';

function App() {

  const [DarkTheme, setDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <div className='App'>
        <Navigation />
        <Main />  
      </div>
    </ThemeContext.Provider>
  );
}

export default App
