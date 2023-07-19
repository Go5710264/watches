import { useState } from 'react';
import './App.css'
import EnteringTimeZone from './components/EnteringTimeZone';
import WatchList from './components/WatchList';

function App() {

  let [timeZones, setNewZone] = useState([
    {
      id: 1,
      name: "London",
      zone: +1
    }
  ]);

  const addNewZone = (event, zone) => {
    setNewZone((preZone) => [...preZone, zone]); 
    // возможно нужно добавить event в useState
  }

  return (
    <>
      <EnteringTimeZone addNewZone={addNewZone} />
      <WatchList timeZones={timeZones} setNewZone={setNewZone}/>
    </>
  )
}

export default App
