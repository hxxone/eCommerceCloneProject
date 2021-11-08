import { Link } from "react-router-dom";
import {
	CalendarToday,
	LocationCity,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@material-ui/icons";
import React from "react";
import "./user.css";

export default function User() {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTItle"> Edit User</h1>
				<Link to="/newUser">
					<button className="userAddButton">Create</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
							className="UserShowImage"
						/>
						<div className="userShowTopTitle">
							<sapn className="userShowUserName">name</sapn>
							<sapn className="userShowUserTitle"> title</sapn>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle"> Account Detail </span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck99</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">1996.05.30</span>
						</div>
						<span className="userShowTitle"> Contact Detail </span>
						<div className="userShowInfo">
							<PhoneAndroid className="userShowIcon" />
							<span className="userShowInfoTitle">123-456-789</span>
						</div>
						<div className="userShowInfo">
							<MailOutline className="userShowIcon" />
							<span className="userShowInfoTitle">aaa@aaa.com</span>
						</div>
						<div className="userShowInfo">
							<LocationCity className="userShowIcon" />
							<span className="userShowInfoTitle">Seoul </span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle"> Edit </span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label> username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label> FullName</label>
								<input
									type="text"
									placeholder="yourname"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label> email</label>
								<input
									type="text"
									placeholder="aaaa@aaa.com"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label> Phone</label>
								<input
									type="text"
									placeholder="123-456-789"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label> Address</label>
								<input
									type="text"
									placeholder="Seoul"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									alt=""
									className="userUpdateImg"
								/>
								<label htmlFor="file">
									{" "}
									<Publish className="userUpdateIcon" />
								</label>
								<input type="file" id="file" style={{ display: "none" }} />
							</div>
							<button className="userUpdateButton">update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
