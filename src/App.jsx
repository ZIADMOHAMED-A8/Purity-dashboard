import './App.css'
import Pagecontainer from './components/pagecontainer'
import Sidebar from './components/sidebar'
import Dashboardboxex from './components/DashboardBoxes'
import FeatureCards from './components/FeautureCards'
import InfoSection from './components/InfoSection'
import IndexLineChart from './components/IndexLineChart'
import SimpleBarChart from './components/Barchart'
import { Wallet, Globe, FileText, ShoppingCart } from "lucide-react";
import Heading from './components/Heading'
import DashboardBox from './components/DashboardBox'
import Barchartwithboxes from './components/Barchartwithboxes'

function App() {
 
  return (
    <>
      <Pagecontainer>
        
          <Sidebar></Sidebar>
          <div className='flex w-full flex-col gap-6 sm:gap-8 md:gap-10'>
          <Dashboardboxex></Dashboardboxex>
          <InfoSection></InfoSection>
          <FeatureCards>
            <Barchartwithboxes></Barchartwithboxes>
            <IndexLineChart></IndexLineChart>

          </FeatureCards>
          </div>
          
      </Pagecontainer>
    </>
  )
}

export default App
