import React from 'react'
import Movies from "./Pages/Movies"
import Navbar from './Components/Navbar'
import {SearchProvider} from "./Context/Search"

const App = () => {

  return (
   <>
   <SearchProvider>
   <Navbar/>
   <Movies/>
   </SearchProvider>
   
   </>
  )
}

export default App