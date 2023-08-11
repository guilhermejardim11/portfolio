import { useContext } from 'react';
import { DeviceContext } from '../../context/DeviceContext';

import Menu from '../Menu/Menu';
import Header from './Header';

const HeaderWrapper = () => {
	const deviceContext = useContext(DeviceContext);

	return (
		<>
			<Header />
			{!deviceContext.isDesktop && <Menu />}
		</>
	);
};

export default HeaderWrapper;
