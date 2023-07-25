const Image = (props) => {
	return (
		<img
			className={`${props.colorShift && 'color_shift'}`}
			src={props.src}
			title='image'
			style={{
				height: props.size !== null ? props.size : props.height,
				width: props.size !== null ? props.size : props.width,
			}}
		/>
	);
};

export default Image;
