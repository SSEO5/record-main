import React from "react";

export default function AddDiary(prop) {
	const [diary, setDiary] = useState({
		diaryId: 1,
		diaryTitle: "Lorem ipsum odor amet",
		diaryDate: "2024-02-14",
		diaryWriter: "diyung",
		diaryContents:
			"Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.",
		emotion: "happiness",
	});

	const handleDiaryChange = (event) => {
		setDiary({ ...diary, [event.target.name]: event.target.value });
	};
	return <div></div>;
}
