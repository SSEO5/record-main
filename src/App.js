import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	LandingPage,
	MainPage,
	DiaryPage,
	SettingPage,
	DiaryListPage,
} from "./pages/index";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/main" element={<MainPage />} />
				<Route path="/diary-list" element={<DiaryListPage />} />
				<Route path="/diary" element={<DiaryPage />} />
				<Route path="/user/info" element={<SettingPage />} />
			</Routes>
		</div>
	);
}

export default App;
