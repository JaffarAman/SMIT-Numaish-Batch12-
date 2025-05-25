import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cmp1 from './components/Cmp1'
import Cmp2 from './components/Cmp2'
import axios from 'axios'

function App() {
  let [count, setCount] = useState(0)
  let [cnicNumber, setCnicNumber] = useState("")



  // const state = useState("Jaffar")
  // console.log("state", state)
  // console.log("HELLO")
  // console.log("cnicNumber", cnicNumber)

  const foo = () => {
    console.log("foo")
  }

  // foo()

  // useEffect( callBack , depArr )

  // useEffect(() => {
  //   // foo()
  //   console.log("first time render hoga jab")
  // }, [])

  // useEffect(() => {
  //   // foo()
  //   console.log("first time render or har dafa re-render")
  // })

  // useEffect(() => {
  //   console.log("frist time or jab cnic value update ho")
  // }, [cnicNumber, count])



  // useEffect(() => {
  //   console.log("mount first Time")
  // }, [])

  // useEffect(() => {

  //   console.log("first time or cnic update")

  // }, [cnicNumber])



  // useEffect(() => {

  //   console.log("first time or every re-render")

  // },)

  const APIKEY = `69e67c8bdadf637986d2a5ad89d314c4`

  // const apiResponse = {
  //   "coord": {
  //     "lon": 67.0822,
  //     "lat": 24.9056
  //   },
  //   "weather": [
  //     {
  //       "id": 801,
  //       "main": "Clouds",
  //       "description": "few clouds",
  //       "icon": "02d"
  //     }
  //   ],
  //   "base": "stations",
  //   "main": {
  //     "temp": 33.9,
  //     "feels_like": 38.85,
  //     "temp_min": 33.9,
  //     "temp_max": 33.9,
  //     "pressure": 997,
  //     "humidity": 52,
  //     "sea_level": 997,
  //     "grnd_level": 994
  //   },
  //   "visibility": 6000,
  //   "wind": {
  //     "speed": 5.66,
  //     "deg": 250
  //   },
  //   "clouds": {
  //     "all": 20
  //   },
  //   "dt": 1748090417,
  //   "sys": {
  //     "type": 1,
  //     "id": 7576,
  //     "country": "PK",
  //     "sunrise": 1748047447,
  //     "sunset": 1748095992
  //   },
  //   "timezone": 18000,
  //   "id": 1174872,
  //   "name": "Karachi",
  //   "cod": 200
  // }



  // console.log("apiResponse", apiResponse)

  const [cityName, setCityName] = useState("")
  const [apiResponse, setApiResponse] = useState([])
  const [icon, setIcon] = useState("")
  const [userLocation, setUserLocation] = useState("")
  console.log("userLocation", userLocation)
  console.log("cityName", cityName)

  useEffect(() => {
    // fetchData()
    getUserLocation()
  }, [])

  // Weather App
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName || "lahore"}&appid=${APIKEY}&units=metric`)
      console.log("response", response.data)
      setApiResponse(response.data)
      setIcon(response.data.weather[0].icon)
    } catch (error) {
      console.log("error", error.message)
    }

  }

  const fetchDataByLocation = async () => {
    try {
      const lat = userLocation.latitude
      const lon = userLocation.longitude
      console.log("lat", lat)
      console.log("lon", lon)
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`)
      console.log("response", response.data)
      setApiResponse(response.data)
      setIcon(response.data.weather[0].icon)
    } catch (error) {
      console.log("error", error.message)
    }

  }


  const getUserLocation = () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function success(position) {
      console.log("position", position)
      setUserLocation(position.coords)
      // fetchDataByLocation()
      // x.innerHTML = "Latitude: " + position.coords.latitude +
      // "<br>Longitude: " + position.coords.longitude;
    }

    function error() {
      // alert("Sorry, no position available.");
      fetchData()

    }
  }


  useEffect(()=>{
    if(userLocation){
      fetchDataByLocation()
    }

  } , [userLocation])



  return (
    <>
      {/* <h1>HELLO WORLD</h1>
      <button onClick={() => setCount(++count)} > {count} </button>
      <input type="text" placeholder='Enter cnic number'
        onChange={(event) => setCnicNumber(event.target.value)}
      />
      {
        true ?
          <Cmp1 /> : null
      } */}


      {/* <Cmp1 /> */}
      {/* <Cmp2 /> */}


      <h1>Weather App</h1>


      <input type="text" placeholder='Enter your city...'
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={fetchData} >Check</button>

      <h1>Time: {new Date().toDateString()} </h1>
      <h1>CITY NAME: {apiResponse?.name} </h1>
      <h1>Temp: {apiResponse?.main?.temp}c </h1>


      {
        icon ?
          <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="" />
          : null
      }
      {/* https://openweathermap.org/img/w/${IconCode}.png */}

    </>

  )
}

export default App
