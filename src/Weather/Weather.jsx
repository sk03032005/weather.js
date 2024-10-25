import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './weatherGet.css'


const Weather = () => {
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('new york')

    const getWeather = async () => {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=fda61e69f693425289c54812242210&q=${city}&aqi=no`) 
            setWeather(response.data)
            console.log(response.data)
        } catch (error) {
            (console.error("Error fetching weather data", error))
        }
    }

    useEffect(() => {
        getWeather()
    }, [])
    return (
        <div className='weather-main'>
            <h1 className='weather-title'> weather is : {weather?.location?.name}</h1>
            <p className='weather-temp'> temperture :{weather?.current?.temp_c}C</p>
            <p className='weather-cond'>condition:{weather?.current?.condidtion?.text}</p>
            <input 
            type="text"
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter City'
            />
            <button onClick={getWeather}>search</button>

        </div>
    )
}


export default Weather
