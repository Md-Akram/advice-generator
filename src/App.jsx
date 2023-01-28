import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState(null)

  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => setAdvice(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>{advice?.slip.advice}</h1>
      <button onClick={() => fetchData()}>Click</button>
    </div>
  )
}

export default App
