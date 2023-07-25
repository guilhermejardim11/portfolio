import Sprite from './Modules/Sprite';

const SpriteBox = (props) => {
	const iconsRender = () => {
		let output = [];
		for (let i = 0; i < props.number; i++) {
			output.push(
				<Sprite
					key={i}
					index={i}
					sprite={props.sprite}
					spriteColumns={props.spriteColumns}
					spriteSize={props.spriteSize}
					size={props.size}
					colorShift={props.isColorShift}
				/>
			);
		}
		return output;
	};

	return iconsRender();
};

export default SpriteBox;
