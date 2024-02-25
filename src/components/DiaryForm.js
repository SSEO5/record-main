import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import InputDate from "./common/InputDate";

export default function DiaryForm(props) {
	let navigate = useNavigate();
	const [date, setDate] = useState(props.date);
	console.log(date);

	const contentRef = useRef();
	const [content, setContent] = useState("");

	return (
		<DiaryFormContainer>
			<IoIosArrowBack
				className="backButton"
				onClick={() => {
					navigate("/main");
				}}
			/>

			<div>
				<InputDate
					className="diary-form-date"
					onChange={(e) => setDate(e.target.value)}
					date={date}
				/>
			</div>
			<div>
				<input
					className="diary-form-title"
					type="text"
					placeholder="제목"
					required
				/>
			</div>
			<div>
				<textarea
					className="diary-form-content"
					placeholder="내용"
					ref={contentRef}
					value={content}
					onChange={(e) => setContent(e.target.value)}
					required
				/>
			</div>
		</DiaryFormContainer>
	);
}

const DiaryFormContainer = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 16px;

	width: 70%;
	height: 100%;
	margin: 20px;
	padding: 10px;
	box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.1);

	display: inline-flex;
	flex-direction: column;

	.backButton {
		width: 20px;
		height: 20px;
		padding: 3px 3px;
		position: relative;
		top: 15px;
		left: 15px;
		cursor: pointer;
		color: rgba(0, 0, 0, 0.7);
	}

	.diary-form-date {
		border: none;
		border-bottom: 2px solid #8642f7;

		padding: 5px 20px;
		cursor: pointer;
		font-size: 15px;

		&:focus {
			outline: none;
		}
	}

	.diary-form-title {
		border: none;
		border-bottom: 3px solid #c6cdd7;
		box-sizing: border-box;

		height: auto;
		width: 80%;
		padding: 20px;
		margin: 20px;
		border-bottom: 1px solid #c6cdd7;

		font-size: 27px;
		line-height: 1;

		&:focus {
			outline: none;
		}

		&::placeholder {
			color: #cbd0cb;
		}
	}

	.diary-form-content {
		border: none;
		box-sizing: border-box;

		width: 80%;
		min-height: 500px;
		resize: vertical;
		margin: 20px;
		padding: 20px;

		font-size: 22px;
		line-height: 1;

		&:focus {
			outline: none;
		}

		&::placeholder {
			color: #cbd0cb;
		}
	}
`;
