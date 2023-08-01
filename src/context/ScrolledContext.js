import { useState, createContext, useEffect } from 'react';

export const ScrolledContext = createContext({
	scrollY: 0,
	isScrolled: false,
});

const ScrolledContextProvider = (props) => {
	const [scrollY, setScrollY] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);

	const scrollHandler = () => {
		const _scrollY = window.scrollY;
		setScrollY(_scrollY);
		setIsScrolled(_scrollY > 25);
	};

	useEffect(() => {
		scrollHandler();
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<ScrolledContext.Provider
			value={{
				scrollY,
				isScrolled,
			}}
		>
			{props.children}
		</ScrolledContext.Provider>
	);
};

export default ScrolledContextProvider;
