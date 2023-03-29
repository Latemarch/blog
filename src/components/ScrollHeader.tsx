import { ReactNode, useEffect, useRef, useState } from "react";

export default function ScrollHeader({
	height,
	children,
}: {
	height: number;
	children: ReactNode;
}) {
	const [scroll, setScroll] = useState(0);
	const [isFixed, setFixed] = useState(false);
	const scrollPosition = useRef(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScroll(position);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {
		if (scrollPosition.current + height < scroll) {
			scrollPosition.current = scroll - height;
			setFixed(false);
		} else if (scroll < scrollPosition.current) {
			scrollPosition.current = scroll;
			setFixed(true);
		} else setFixed(false);
	}, [scroll]);

	const headerStyle = {
		top: `${isFixed ? 0 : scrollPosition.current}px`,
	};
	return (
		<div
			className={`${isFixed ? "fixed" : "absolute"} flex`}
			style={headerStyle}
		>
			{children}
		</div>
	);
}
