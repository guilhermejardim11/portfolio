import Image from './Modules/Image';

const ImageBox = (props) => {
	return (
		<>
			{props.images.map((item, index) => (
				<Image
					key={index}
					src={item}
					size={props.size}
					colorShift={props.isColorShift}
				/>
			))}
		</>
	);
};

export default ImageBox;
