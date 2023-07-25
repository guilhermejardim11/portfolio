const Sprite = (props) => {
	return (
		<i
			className={`${props.colorShift && 'color_shift'}`}
			style={{
				height: props.size,
				width: props.size,
				backgroundImage: `url(${props.sprite})`,
				backgroundSize: `${(props.spriteSize * props.size) / (props.spriteSize / props.spriteColumns)}px`,
				backgroundPositionX: `-${(props.index % props.spriteColumns) * props.size}px`,
				backgroundPositionY: `-${Math.floor(props.index / props.spriteColumns) * props.size}px`
			}}
		/>
	);
};

export default Sprite;
