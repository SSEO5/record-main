import React, { useMemo } from "react";
import { MainHeader, Calendar, ViewDiary, MainButton } from "../components";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiEdit2Fill } from "react-icons/ri";
import buttonImage1 from "../assets/select-all.png";
import buttonImage2 from "../assets/profile.png";
import { findDiaryByDate } from "../utils/findDiaryByDate";
// import { MdArrowBackIos } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";
// import { addDays, subDays } from "date-fns";
// import { setSelectedDate } from "./../store";
// import { format } from "date-fns";

export default function MainPage() {
	let navigate = useNavigate();
	let selectedDate = useSelector((state) => state.selectedDate.currentDate);

	const diary = useMemo(() => findDiaryByDate(selectedDate), [selectedDate]);
	console.log(diary);

	// let dispatch = useDispatch();
	// const prevDay = () => {
	// 	const newSelectedDate = format(
	// 		subDays(new Date(selectedDate), 1),
	// 		"yyyy-MM-dd"
	// 	);
	// 	dispatch(setSelectedDate(newSelectedDate));
	// };
	// const nextDay = () => {
	// 	const newSelectedDate = format(
	// 		addDays(new Date(selectedDate), 1),
	// 		"yyyy-MM-dd"
	// 	);
	// 	dispatch(setSelectedDate(newSelectedDate));
	// };

	return (
		<Main>
			<MainHeader
				children1={buttonImage1}
				children2={buttonImage2}
				onClick1={() => {
					navigate("/diary-list");
				}}
				onClick2={() => {
					navigate("/user/info");
				}}
				imgWidth="48px"
			></MainHeader>
			<Calendar />

			{diary ? (
				<div>
					{/* <MdArrowBackIos onClick={prevDay} /> */}
					<ViewDiary
						diaryTitle={diary.diaryTitle}
						diaryContents={diary.diaryContents}
						diaryDate={diary.diaryDate}
						emotion={diary.emotion}
					/>
					{/* <MdArrowForwardIos onClick={nextDay} /> */}
				</div>
			) : (
				<div className="no-diary">
					<MainButton
						onClick={() => {
							navigate("/diary");
						}}
					>
						<RiEdit2Fill className="drop-icon" />
						<span>일기 쓰러가기</span>
					</MainButton>
				</div>
			)}
		</Main>
	);
}

const Main = styled.div`
	.no-diary {
		margin-top: 70px;
	}

	.drop-icon {
		padding-right: 5px;
		position: relative;
		top: 2px;
	}
`;
