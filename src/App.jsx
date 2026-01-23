import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagecontainer from './components/pagecontainer'
import Sidebar from './components/sidebar'
function App() {

  return (
    <>
      <Pagecontainer>
          <Sidebar></Sidebar>
      </Pagecontainer>
    </>
  )
}

export default App
