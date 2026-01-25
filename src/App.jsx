import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagecontainer from './components/pagecontainer'
import Sidebar from './components/sidebar'
import Dashboardboxex from './components/DashboardBoxes'
import InfoCard from './components/Infocard'
import FeatureCards from './components/FeautureCards'
import InfoSection from './components/InfoSection'
function App() {

  return (
    <>
      <Pagecontainer>
        
          <Sidebar></Sidebar>
          <div className='flex flex-col gap-10'>
          <Dashboardboxex></Dashboardboxex>
          <InfoSection></InfoSection>
          </div>
          
      </Pagecontainer>
    </>
  )
}

export default App
