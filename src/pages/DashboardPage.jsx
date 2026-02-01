import Barchartwithboxes from "../components/Barchartwithboxes"
import Dashboardboxex from "../components/DashboardBoxes"
import FeatureCards from "../components/FeautureCards"
import InfoSection from "../components/InfoSection"
import OrdersReview from "../components/OrdersReview"
import Projects from "../components/Projects"
import IndexLineChart from '../components/IndexLineChart'

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