import { useContext } from 'react';
import { DeviceContext } from '../../context/DeviceContext';

import LanguageOverlay from '../Language/LanguageOverlay';
import Menu from '../Menu/Menu';
import Header from './Header';

const HeaderWrapper = () => {
	const deviceContext = useContext(DeviceContext);

	return (
		<>
			<Header />
			{!deviceContext.isDesktop && <Menu />}
			<LanguageOverlay />
		</>
	);
};

export default HeaderWrapper;
