import styled from "styled-components"
import Chart from "../chart/Chart";
import FeaturedInfo from "./FeaturedInfo";
import { userData } from "../../data";
import WidgetSmall from "../widget/WidgetSmall";
import WidgetLarge from "../widget/WidgetLarge";

const Container = styled.div`
    flex: 4;
`;
const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`;

export default function Home() {
    return (
        <Container>
            <FeaturedInfo/>
            <Chart data={userData} title="Users Anlytics" grid dataKey="Active User"/>
            <HomeWidgets> 
                <WidgetSmall/>
                <WidgetLarge/>
            </HomeWidgets>

        </Container>
    )
}
