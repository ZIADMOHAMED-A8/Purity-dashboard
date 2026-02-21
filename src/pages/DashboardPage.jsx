import Barchartwithboxes from "../components/dashboard/Barchartwithboxes"
import Dashboardboxex from "../components/dashboard/DashboardBoxes"
import FeatureCards from "../components/dashboard/FeatureCards"
import InfoSection from "../components/dashboard/InfoSection"
import OrdersReview from "../components/dashboard/OrdersReview"
import Projects from "../components/tables/Projects"
import IndexLineChart from '../components/dashboard/IndexLineChart'

export default function DashBoardPage() {
    return (
        <>
                
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
        </>
    )
}