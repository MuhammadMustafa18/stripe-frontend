import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         
            <Navbar />
          {/* <div className="absolute">
            <Hero />
          </div> */}
      </div>
    </>
  );
}

export default App
