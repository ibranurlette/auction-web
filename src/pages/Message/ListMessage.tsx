interface ListMessageProps {
	data: {
		image: string;
		name: string;
		status: string;
	}[];
}

export const ListMessage = ({ data }: ListMessageProps) => {
	return (
		<div className="basis-1/3 mt-10">
			{data.map((message, index) => (
				<div key={index} className="flex items-center mb-5 mx-5">
					<img
						className="h-14 w-14 rounded-full mr-4"
						src={message.image}
						alt="nature image"
					/>
					<div>
						<div className="font-medium text-sm">{message.name}</div>
						<div className="font-normal text-xs text-gray-600">
							{message.status}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
