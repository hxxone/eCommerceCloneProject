import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
const Item = styled.div`
	flex: 1;
	margin: 0px 20px;
	padding: 30px;
	border-radius: 10px;
	cursor: pointer;
	-webkit-box-shadow: 0px 0px 11px -1px #ebebeb;
	box-shadow: 0px 0px 11px -1px #cccccc;
`;
const Title = styled.span`
	font-size: 24px;
`;
const MoneyContainer = styled.div`
	margin: 10px 0px;
	display: flex;
	align-items: center;
`;
const Money = styled.span`
	font-size: 30px;
	font-weight: 400;
`;
const MoneyRate = styled.span`
	display: flex;
	align-items: center;
	margin-left: 20px;
`;
const Sub = styled.span`
    font-size: 15px;
    color: grey;
`;

export default function FeaturedInfo() {
	return (
		<Container>
			<Item>
				<Title>Revanue</Title>
				<MoneyContainer>
					<Money>$2,415</Money>
					<MoneyRate>
						<ArrowDownward style={{ "fontSize" :"14px", "marginLeft" : "5px", "color" : "red"}} /> -11.4
					</MoneyRate>
				</MoneyContainer>
				<Sub> Compared to last month</Sub>
			</Item>
			<Item>
				<Title>Sales</Title>
				<MoneyContainer>
					<Money>$4,415</Money>
					<MoneyRate>
						<ArrowDownward style={{ "fontSize" :"14px", "marginLeft" : "5px", "color" : "red"}}/> -1.4
					</MoneyRate>
				</MoneyContainer>
				<Sub> Compared to last month</Sub>
			</Item>
			<Item>
				<Title>Cost</Title>
				<MoneyContainer>
					<Money>$2,225</Money>
					<MoneyRate>
						<ArrowUpward style={{ "fontSize" :"14px", "marginLeft" : "5px", "color" : "green"}}/> +2.4
					</MoneyRate>
				</MoneyContainer>
				<Sub> Compared to last month</Sub>
			</Item>
		</Container>
	);
}
