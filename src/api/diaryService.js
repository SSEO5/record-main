import API from "./api";

export const fetchCreateDiary = async (diary) => {
	const { date, title, contents } = diary;

	const requestBody = {
		title,
		contents,
		date,
	};

	try {
		const response = await API.post("/diary", requestBody);
		if (response.status === 200) {
			alert("일기가 성공적으로 저장되었습니다.");
			window.location.href = "/main";
		}
	} catch (error) {
		if (error.response && error.response.data) {
			// 서버로부터의 에러 응답이 있는 경우 해당 메시지를 띄움
			alert(error.response.data);
		} else {
			console.log(error);
			alert("서버와의 통신 중 문제가 발생했습니다.");
		}
	}
};

export const fetchGetDiaryByDate = async (diary) => {
	const { start_date, end_date } = diary;

	const requestBody = {
		start_date,
		end_date,
	};

	try {
		const response = await API.get("/diary", requestBody);
		if (response.status === 200) {
			window.location.href = "/main";
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchGetDiary = async () => {
	try {
		const response = await API.get("/main");
		if (response.status === 200) {
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchViewDiary = async (diaryId) => {
	try {
		const response = await API.get(`/diary/${diaryId}`);
		if (response.status === 200) {
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchDeleteDiary = async (diaryId) => {
	try {
		const response = await API.delete(`/diary/${diaryId}`);
		if (response.status === 200) {
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchEditDiary = async (diaryId) => {
	try {
		const response = await API.put(`/diary/${diaryId}`);
		if (response.status === 200) {
		}
	} catch (error) {
		console.log(error);
	}
};

// export const getDiaryByDate = async (diary) => {
// 	const { userId, diaryDate } = diary;

// 	const requestBody = {
// 		userId,
// 		diaryDate,
// 	};

// 	try {
// 		const { data, status } = await API.post(
// 			"/diary",
// 			JSON.stringify(requestBody)
// 		);
// 		return { data, status, error: null };
// 	} catch (error) {
// 		const {
// 			data: { message },
// 			status,
// 		} = error.response;
// 		return { data: message, status, error };
// 	}
// };
