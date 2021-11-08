import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, Home, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link }  from "react-router-dom"


const Container = styled.div`
	flex: 1;
	height: calc(100vh - 20px);
	background-color: #f3f3f3;
	position: sticky;
	top: 50px;
`;
const Wrapper = styled.div`
	padding: 20px;
	color: #555;
`;
const Menu = styled.div`
	margin-bottom: 10px;
`;
const Title = styled.h3`
	font-size: 13px;
	color: #919191;
`;
const List = styled.ul`
	list-style: none;
	padding: 5px;
`;
const ListItem = styled.li`
	padding: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 10px;

	&:hover,
	:active {
		background-color: rgb(227, 227, 241);
	}
`;

export default function Sidebar() {
	return (
		<Container>
			<Wrapper>
				<Menu>
					<Title>DASHBOARD</Title>
					<List>
						<Link to="/" className="link">
						<ListItem>
							<Home style={{ "marginTop" :"5px", "fontSize" : "20px !important"}}/> Home
						</ListItem>
						</Link>
						<ListItem>
							<Timeline style={{ "marginTop" :"5px", "fontSize" : "20px !important"}}/> Analytics
						</ListItem>
						<ListItem>
							<TrendingUp style={{ "marginTop" :"5px", "fontSize" : "20px !important"}} /> Sales
						</ListItem>
					</List>
				</Menu>
				<Menu>
					<Title>Quick Menu</Title>
					<List>
						<Link to="/users" className="link">
						<ListItem>
							<PermIdentity style={{ "marginTop" :"5px", "fontSize" : "20px !important"}}/> User
						</ListItem>
						</Link>
						<Link to="/products" className="link"s>
						<ListItem>
							<Storefront style={{ "marginTop" :"5px", "fontSize" : "20px !important"}}/> Products
						</ListItem>
						</Link>
						<ListItem>
							<AttachMoney style={{ "marginTop" :"5px", "fontSize" : "20px !important"}} /> Transactions
						</ListItem>
						<ListItem>
							<BarChart style={{ "marginTop" :"5px", "fontSize" : "20px !important"}} /> Reports
						</ListItem>
					</List>
				</Menu>
				<Menu>
					<Title>Notification</Title>
					<List>
						<ListItem>
							<MailOutline style={{ "marginTop" :"5px", "fontSize" : "20px !important"}}/> Mail
						</ListItem>
						<ListItem>
							<DynamicFeed style={{ "marginTop" :"5px", "fontSize" : "20px !important"}}/> Feedback
						</ListItem>
						<ListItem>
							<ChatBubbleOutline style={{ "marginTop" :"5px", "fontSize" : "20px !important"}} /> Message
						</ListItem>
					</List>
				</Menu>
				<Menu>
					<Title>Staff</Title>
					<List>
						<ListItem>
							<WorkOutline style={{ "marginTop" :"5px", "fontSize" : "20px !important"}}/> Manage
						</ListItem>
						<ListItem>
							<Timeline style={{ "marginTop" :"5px", "fontSize" : "20px !important"}}/> Analytics
						</ListItem>
						<ListItem>
							<Report style={{ "marginTop" :"5px", "fontSize" : "20px !important"}} /> Reports
						</ListItem>
					</List>
				</Menu>
			</Wrapper>
		</Container>
	);
}
