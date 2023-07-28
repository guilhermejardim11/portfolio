import HeaderWrapper from '../components/Header/HeaderWrapper';
import Cookies from '../components/Cookies/Cookies';
import ScrollTop from '../components/UI/ScrollTop';

const RootLayout = (props) => {
	return (
		<>
			<HeaderWrapper />
			{props.children}
			<Cookies />
			<ScrollTop contentRef={props.contentRef} />
		</>
	);
};

export default RootLayout;
