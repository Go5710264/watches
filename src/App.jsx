import './App.css'
import EnteringTimeZone from './components/EnteringTimeZone';
import TimeItems from './components/TimeItems';

function App() {

  const addNewZone = (event, zone) => {
    console.log(zone)
  }

  return (
    <>
      <EnteringTimeZone addNewZone={addNewZone} />
      <TimeItems/>
      {/* необоходимо проработать вышележащий компонент - появление циферблата */}
    </>
  )
}

export default App
