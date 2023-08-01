const CurvedMasks = () => {
	return (
		<svg width='0' height='0'>
			<defs>
				<clipPath id='curvedMaskTop' clipPathUnits='objectBoundingBox'>
					<path
						d='
                            M 0,1
                            C .35 0, .65 0, 1 1
                            Z
                        '
					/>
				</clipPath>
				<clipPath id='curvedMaskBottom' clipPathUnits='objectBoundingBox'>
					<path
						d='
                            M 1,0
                            C .65 1, .35 1, 0 0
                            Z
                        '
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default CurvedMasks;
