import React from "react";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 50px;
	background-color: white;
	position: sticky;
	top: 0;
	z-index: 999;
`;
const TopbarWraper = styled.div`
	height: 100%;
	padding: 0px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const TopLeft = styled.div``;
const Logo = styled.span`
	font-weight: bolder;
	font-size: 30px;
	color: darkblue;
	cursor: pointer;
`;
const TopRight = styled.div`
	display: flex;
	align-items: center;
`;
const TopIconBag = styled.span`
	position: absolute;
	width: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	top: -5px;
	right: 0px;
	background-color: red;
	color: white;
	border-radius: 50px;
	font-size: 10px;
`;
const TopbarIconContainer = styled.div`
	position: relative;
	cursor: pointer;
	margin-right: 10px;
	color: #555;
`;
const TopAvatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;

export default function Topbar() {
	return (
		<Container>
			<TopbarWraper>
				<TopLeft>
					<Logo> hxx admin </Logo>
				</TopLeft>
				<TopRight>
					<TopbarIconContainer>
						<NotificationsNone />
						<TopIconBag>2</TopIconBag>
					</TopbarIconContainer>
					<TopbarIconContainer>
						<Language />
						<TopIconBag>2</TopIconBag>
					</TopbarIconContainer>
					<TopbarIconContainer>
						<Settings />
					</TopbarIconContainer>
					<TopAvatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
				</TopRight>
			</TopbarWraper>
		</Container>
	);
}
