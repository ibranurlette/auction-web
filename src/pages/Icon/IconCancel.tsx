export const IconCancel = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			viewBox="0 0 512 512"
			fill="currentColor"
			height={props.height}
			width={props.width}
			color={props.color}
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
				d="M368 368L144 144M368 144L144 368"
			/>
		</svg>
	);
};
