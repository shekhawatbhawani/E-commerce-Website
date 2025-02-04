import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

import Body from './Components/Body'
function App() {

  return (
    <>
      <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Body/>} ></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
