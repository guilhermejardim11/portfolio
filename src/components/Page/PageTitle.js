import { useContext, useEffect } from 'react';
import { MenuContext } from '../../context/MenuContext';

const PageTitle = ({ title }) => {
	const menuContext = useContext(MenuContext);

	useEffect(() => {
		menuContext.setCurrentPageName(title);
	}, []);
};

export default PageTitle;
