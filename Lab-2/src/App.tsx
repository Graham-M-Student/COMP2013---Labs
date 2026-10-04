import './App.css'
import ResortContainer from './Components/ResortContainer.tsx'
import listings from './data/data.ts'

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ResortContainer data={listings}/>
    </>
  )
}

export default App