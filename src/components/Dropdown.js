import React from 'react';
import axios from 'axios';
// import { useContext } from 'react';
import { useWeather } from '../context/WeatherContext';


function Dropdown() {
  const lang = navigator.language;
  const {setWeather, city, setCity, setState} = useWeather();

  const handleChange = async () =>{
    const api_key = "939a0f448976f243744b2b42319d1738";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=${lang.split("-", 1)}`;
    await axios(baseURL).then(res => setWeather(res.data));

    setState (true)
    setCity("");
  };
  return (
    <div className='dropdown'>

      <form onSubmit={(e)=>{e.preventDefault(); handleChange();}}>
        <div className='searchBox'>
          <input value={city} onChange={(e) => {setCity(e.target.value)}} type="text" placeholder='Search a City'/>
          <button type="submit">Search</button>
        </div>
      </form>
        
    </div>
  )
}

export default Dropdown
