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
import Projects from './components/Projects'
import OrdersReview from './components/OrdersReview'

function App() {

  return (
    <>
      <Pagecontainer>
        <Dashboardboxex></Dashboardboxex>
        <InfoSection></InfoSection>
        <FeatureCards>
          <Barchartwithboxes></Barchartwithboxes>
          <IndexLineChart></IndexLineChart>
        </FeatureCards>
        <FeatureCards>
          <Projects></Projects>
          <OrdersReview></OrdersReview>
        </FeatureCards>
      </Pagecontainer>
    </>
  )
}

export default App
