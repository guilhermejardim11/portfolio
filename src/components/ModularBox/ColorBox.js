import Color from './Modules/Color';

const ColorModule = (props) => {
	return (
		<>
			{props.palette.map((color, index) => (
				<Color key={index} color={color} />
			))}
		</>
	);
};

export default ColorModule;
