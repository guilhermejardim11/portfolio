import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';

const RootContent = (props) => {
	return (
		props.children ?? (
			<>
				<Outlet context={[props.isScrolled, props.isMenuOpen]} />
				<Footer />
			</>
		)
	);
};

export default RootContent;
