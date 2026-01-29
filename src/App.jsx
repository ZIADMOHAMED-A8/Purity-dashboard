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
import WealthCard from './components/WealthCreationcard'
import IndexLineChart from './components/IndexLineChart'
import SimpleBarChart from './components/Barchart'
import { Wallet, Globe, FileText, ShoppingCart } from "lucide-react";
import DashboardBox from "./components/DashboardBox";
function App() {
  const Icons_mapping=[
    {label:"Today\'s money",
    Icon:Wallet},
    {label:"Today\'s Users",
    Icon:Globe},
    {label:'New clients',
    Icon:FileText},
   { label:'Total sales',
Icon:ShoppingCart},
]
  return (
    <>
      <Pagecontainer>
        
          <Sidebar></Sidebar>
          <div className='flex w-full flex-col gap-6 sm:gap-8 md:gap-10'>
          <Dashboardboxex list={Icons_mapping}></Dashboardboxex>
          <InfoSection></InfoSection>
          <FeatureCards>
            <SimpleBarChart></SimpleBarChart>
            <IndexLineChart></IndexLineChart>

          </FeatureCards>
          </div>
          
      </Pagecontainer>
    </>
  )
}

export default App
