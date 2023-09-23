export const IconCompassOutline = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			viewBox="0 0 512 512"
			fill="currentColor"
			height="1.7em"
			width="1.7em"
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeMiterlimit={10}
				strokeWidth={32}
				d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
			/>
			<path d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z" />
		</svg>
	);
};
