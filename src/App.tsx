import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Button } from '@mui/material'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Button>Hello there</Button>
      <Footer />
    </>
  )
}

export default App
