import styled from "styled-components";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const Container = styled.div`
	margin: 20px;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 11px -1px #ebebeb;
	box-shadow: 0px 0px 11px -1px #cccccc;
`;
const Title = styled.h3`
	margin-bottom: 20px;
`;

export default function Chart({data, title, dataKey, grid }) {

	return (
		<Container>
			<Title> {title}</Title>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#3f2c42" ></XAxis>
                    <Line type="monotone" dataKey={dataKey} stroke="#3f2c42" />
                    <Tooltip/>
                   { grid  && <CartesianGrid stroke="#e7e7e7" strokeDasharray="5 5"/> }
                </LineChart>
            </ResponsiveContainer>
		</Container>
	);
}
