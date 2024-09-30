import { useState } from 'react'
import QouteDisplay from './components/QouteDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl absolute text-gray-500 top-16'>Qoutes Generator</h1>
      <QouteDisplay/>
    </>
  )
}

export default App
