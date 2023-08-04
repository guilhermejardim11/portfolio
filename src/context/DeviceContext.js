import { useState, createContext, useEffect } from 'react';

export const DeviceContext = createContext({
	isDesktop: false,
	scrollY: 0,
	isScrolled: false,
});

const DeviceContextProvider = (props) => {
	const [isDesktop, setIsDesktop] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);

	const resizeHandler = () => {
		const _windowWidth = window.innerWidth;
		setIsDesktop(_windowWidth > 992);
	};

	const scrollHandler = () => {
		const _scrollY = window.scrollY;
		setScrollY(_scrollY);
		setIsScrolled(_scrollY > 25);
	};

	useEffect(() => {
		resizeHandler();
		window.addEventListener('resize', resizeHandler);

		scrollHandler();
		window.addEventListener('scroll', scrollHandler);

		return () => {
			window.removeEventListener('resize', resizeHandler);
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<DeviceContext.Provider
			value={{
				isDesktop,
				scrollY,
				isScrolled,
			}}
		>
			{props.children}
		</DeviceContext.Provider>
	);
};

export default DeviceContextProvider;
