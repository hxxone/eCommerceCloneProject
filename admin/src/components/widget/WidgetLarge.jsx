import React from "react";
import styled from "styled-components";
import { widLargeData } from "../../data";

const Container = styled.div`
	flex: 2;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	padding: 20px;
`;
const Title = styled.h3`
	font-size: 22px;
	font-weight: 600;
`;
const Table = styled.table`
	width: 100%;
	border-spacing: 20px;
`;
const Tr = styled.tr``;
const Th = styled.th`
	text-align: left;
`;
const User = styled.td`
	display: flex;
	align-items: center;
	font-weight: 600;
`;
const Image = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`;
const Name = styled.span``;
const Date = styled.td`
	font-weight: 300;
`;
const Amount = styled.td`
	font-weight: 300;
`;
const Status = styled.td``;
const Button = styled.button`
	padding: 5px 7px;
	border: none;
	border-radius: 10px;
`;

export default function WidgetLarge() {
	return (
		<Container>
			<Title> Latest transactions </Title>
			<Table>
				<thead>
					<Tr>
						<Th>Customer</Th>
						<Th>Date</Th>
						<Th>Amount</Th>
						<Th>Status</Th>
					</Tr>
				</thead>
				<tbody>
					{widLargeData.map((user, key) => (
						<Tr key={key}>
							<User>
								<Image src={user.img} />
								<Name> {user.name} </Name>
							</User>
							<Date> {user.date} </Date>
							<Amount> {user.amount}</Amount>
							<Status>
								<Button
									type={user.btn}
									style={{ backgroundColor: user.bgcolor, color: user.color }}
								>
									{user.btn}
								</Button>
							</Status>
						</Tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
}
