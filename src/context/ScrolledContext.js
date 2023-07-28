import { useState, createContext } from 'react';

export const ScrolledContext = createContext({
	isScrolled: false,
	setIsScrolled: () => {},
});

const ScrolledContextProvider = (props) => {
	const [isScrolled, setIsScrolled] = useState(false);

	return (
		<ScrolledContext.Provider
			value={{
				isScrolled,
				setIsScrolled,
			}}
		>
			{props.children}
		</ScrolledContext.Provider>
	);
};

export default ScrolledContextProvider;
