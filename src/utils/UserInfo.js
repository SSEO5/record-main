import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
// import { SERVER_URL } from "../constants";

export default function UserInfo() {
	const [userInfo, setUserInfo] = useState([]);

	useEffect(() => {
		axios
			.get("https://codingapple1.github.io/shop/data2.json")
			.then((result) => {
				console.log(result.data);
				let copy = [...result.data];
				setUserInfo(copy);
			})
			.catch(() => {
				console.log("실패함");
			});
	}, []);
	return (
		<div>
			{userInfo.map((temp, idx) => (
				<UserInfoDiv key={idx}>{temp.title}</UserInfoDiv>
			))}

			{/* {userInfo.userProfileId}
			{userInfo.userEmail}
			{userInfo.userName}
			{userInfo.userSex} */}
		</div>
	);
}

const UserInfoDiv = styled.div`
	width: 243px;
	height: 38px;
	border: 2px solid #000000;
	border-radius: 50px;

	padding-left: 30px;
	outline: none;
`;
