import HeaderWrapper from '../components/Header/HeaderWrapper';
import Footer from '../components/Footer/Footer';
import Cookies from '../components/Cookies/Cookies';
import ScrollTop from '../components/UI/ScrollTop';
import CurvedMasks from '../components/UI/CurvedMasks';

const RootLayout = (props) => {
	return (
		<>
			<HeaderWrapper />
			<div id='content'>
				{props.children}
				<Footer />
			</div>

			<Cookies />
			<ScrollTop contentRef={props.contentRef} />

			<CurvedMasks />
		</>
	);
};

export default RootLayout;
