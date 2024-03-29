import React, { useState, useEffect } from "react";

const useScrollAnimation = () => {
	const [isInViewport, setIsInViewport] = useState(false);
	const ref = React.useRef(null);

	useEffect(() => {
		if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

		const callback = (entries) => {
			const intersecting = entries.some((entry) => entry.isIntersecting);
			if (intersecting) {
				setIsInViewport(true);
				// 한 번 나타났으면 Intersection Observer 중단
				// observer.disconnect();
			}
		};

		const options = { root: null, rootMargin: "0px", threshold: 0.7 };

		const observer = new IntersectionObserver(callback, options);
		observer.observe(ref.current); // 요소 관찰 시작

		return () => {
			observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
		};
	}, []);

	return { isInViewport, ref };
};

export default useScrollAnimation;
