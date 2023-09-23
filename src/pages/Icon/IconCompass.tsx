export const IconCompass = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			viewBox="0 0 512 512"
			fill="currentColor"
			height="1.7em"
			width="1.7em"
			{...props}
		>
			<path d="M280 256 A24 24 0 0 1 256 280 A24 24 0 0 1 232 256 A24 24 0 0 1 280 256 z" />
			<path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm105.07 113.33l-46.88 117.2a64 64 0 01-35.66 35.66l-117.2 46.88a8 8 0 01-10.4-10.4l46.88-117.2a64 64 0 0135.66-35.66l117.2-46.88a8 8 0 0110.4 10.4z" />
		</svg>
	);
};
