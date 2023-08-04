import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { DeviceContext } from '../../context/DeviceContext';

import styles from './LanguageButton.module.scss';

import BorderButton from '../UI/BorderButton';

const LanguageButton = (props) => {
	const menuContext = useContext(MenuContext);
	const deviceContext = useContext(DeviceContext);

	return (
		<BorderButton
			className={`${styles.button} ${(menuContext.isMenuOpen || deviceContext.isDesktop) && styles.shown}`}
			onClick={props.onClick}
		>
			<svg>
				<path d='M.31,11.329a9.007,9.007,0,1,1,11.03,6.358h0l-.064.017-.065.017-.065.016-.066.016q-.261.062-.522.108t-.521.077q-.261.031-.52.046T9,18A8.987,8.987,0,0,1,.31,11.329Zm2.033.39a7.183,7.183,0,0,0,2.579,3.205,7.251,7.251,0,0,0,1.831.912A7.164,7.164,0,0,0,8.79,16.2a13.586,13.586,0,0,1-2.062-2.456A13.539,13.539,0,0,1,5.319,10.92Zm4.716-1.264a11.648,11.648,0,0,0,1.483,2.754,11.794,11.794,0,0,0,1.02,1.221,11.952,11.952,0,0,0,1.195,1.091,11.99,11.99,0,0,0,.486-1.541,11.8,11.8,0,0,0,.27-1.567,11.689,11.689,0,0,0,.056-1.571,11.579,11.579,0,0,0-.154-1.555Zm6.092-1.634a13.531,13.531,0,0,1,.189,1.564,13.484,13.484,0,0,1,.006,1.581,13.6,13.6,0,0,1-.18,1.583,13.675,13.675,0,0,1-.37,1.57,7.147,7.147,0,0,0,1.578-1.332,7.235,7.235,0,0,0,1.73-3.664,7.162,7.162,0,0,0,.02-2.1ZM1.875,9.979l2.953-.792a13.81,13.81,0,0,1-.242-1.5,13.623,13.623,0,0,1-.074-1.526,13.476,13.476,0,0,1,.1-1.533A13.333,13.333,0,0,1,4.892,3.1,7.2,7.2,0,0,0,1.875,9.979ZM7.106,2.052a11.778,11.778,0,0,0-.539,6.67l4.4-1.18a11.814,11.814,0,0,0-.634-1.549,11.747,11.747,0,0,0-.852-1.45A11.7,11.7,0,0,0,8.419,3.218,11.749,11.749,0,0,0,7.153,2.041l-.008-.007-.007-.007L7.13,2.021l-.008-.007,0,.01,0,.01,0,.009Zm5.6,5.025,2.951-.791a7.171,7.171,0,0,0-2.426-3.1A7.225,7.225,0,0,0,9.592,1.831,13.406,13.406,0,0,1,10.6,3.015a13.513,13.513,0,0,1,.857,1.278,13.628,13.628,0,0,1,.7,1.359A13.782,13.782,0,0,1,12.706,7.077Z' />
			</svg>
		</BorderButton>
	);
};

export default LanguageButton;
