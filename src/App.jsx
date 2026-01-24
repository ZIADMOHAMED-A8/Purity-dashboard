import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagecontainer from './components/pagecontainer'
import Sidebar from './components/sidebar'
import Dashboardboxex from './components/DashboardBoxes'
function App() {

  return (
    <>
      <Pagecontainer>
        
          <Sidebar></Sidebar>
         
          <Dashboardboxex></Dashboardboxex>
          
          
      </Pagecontainer>
    </>
  )
}

export default App
