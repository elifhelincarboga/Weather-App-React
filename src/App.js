import React from 'react'
import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Cards from './components/Cards'
import Dropdown from './components/Dropdown';

function App() {
  return (
    <>
    <WeatherProvider>
      <Cards></Cards>
      <Dropdown></Dropdown>
    </WeatherProvider>
    </>

  )
}

export default App