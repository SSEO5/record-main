import React from "react";
import styled from "styled-components";
import {
	MyHeader,
	DiaryForm,
	MainButton,
	EmotionGraph,
	Music,
} from "../components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MusicList } from "../data";

export default function DiaryPage() {
	const [diarySubmit, setDiarySubmit] = useState(false);

	const handleDiarySubmit = (event) => {
		setDiarySubmit(true);
		event.preventDefault();

		alert(`오늘의 감정을 분석합니다.`);
		setDiarySubmit(false);
	};

	// let todayEmotion = useSelector((state) => state.highestEmotion.emotion);

	let selectedDate = useSelector((state) => state.selectedDate.currentDate);

	//임시 데이터
	const emotionData = useSelector((state) => state.allEmotionData);

	return (
		<DiaryPageContainer>
			<MyHeader></MyHeader>

			<form onSubmit={handleDiarySubmit}>
				<DiaryForm date={selectedDate} />
				<Gap size={100} />
				<MainButton
					children="오늘의 감정 분석 받아오기"
					variant="purple"
					type="submit"
					onSubmit={handleDiarySubmit}
				/>
				<Gap size={100} />
				{emotionData && (
					<EmotionGraph width={600} height={400} data={emotionData} />
				)}
				<Gap size={100} />
				{/* <div>{todayEmotion}</div> */}
			</form>
			<MainButton
				children="저장"
				variant="purple"
				type="submit"
				disabled={diarySubmit}
			/>
			<Gap size={200} />
			<div className="music-buttons">
				<span>
					<button className="korean" />
					<span className="music-button-text">korean</span>
				</span>
				<span>
					<button className="foreign" />
					<span className="music-button-text">foreign</span>
					<span>
						<button className="mix" />
						<span className="music-button-text">mix</span>
					</span>
				</span>
			</div>
			<Gap size={25} />
			<MainButton
				className="getMusic"
				children="오늘의 노래 추천 받아오기"
				buttonStyle={"gray"}
				type="submit"
			/>
			<Gap size={100} />
			<div>
				{MusicList.map((music, index) => {
					return (
						<div>
							<Music
								key={index}
								musicTitle={music.musicTitle}
								musicArtist={music.musicArtist}
							></Music>
							<Gap size={80} />
						</div>
					);
				})}
			</div>
		</DiaryPageContainer>
	);
}

const DiaryPageContainer = styled.div`
	align-items: center;

	.music-buttons {
		button {
			margin: 5px;
			border: none;
			cursor: pointer;

			padding: 12px 12px;
			border-radius: 50px;
			background: #d9d9d9;

			opacity: 0.5;
		}

		.korean {
			background: #a9b2f6;
			&:hover,
			&:active,
			&:focus {
				opacity: 1;
				box-shadow: -3px -3px #6e7cd8 inset;
			}
		}
		.foreign {
			background: #a1e8cd;
			&:hover,
			&:active,
			&:focus {
				opacity: 1;
				box-shadow: -3px -3px #66caa0 inset;
			}
		}
		.mix {
			background: #c6a0fa;
			&:hover,
			&:active,
			&:focus {
				opacity: 1;
				box-shadow: -3px -3px #a179d9 inset;
			}
		}

		.music-button-text {
			position: relative;
			top: 5px;
			margin-right: 25px;
		}
	}
`;

const Gap = styled.div`
	height: ${(props) => props.size}px;
`;
