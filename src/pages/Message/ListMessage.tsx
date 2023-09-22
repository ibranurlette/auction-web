interface ListMessageProps {
	data: {
		image: string;
		name: string;
		status: string;
	}[];
}

export const ListMessage = ({ data }: ListMessageProps) => {
	return (
		<div className="lg:basis-1/3 p-4 border-r">
			<div className="mt-3">
				{data.map((message, index) => (
					<div key={index} className="flex items-center mb-6">
						<img
							className="h-14 w-14 rounded-full mr-4"
							src={message.image}
							alt="nature image"
						/>

						<div className="max-sm:hidden sm:hidden lg:inline">
							<div className="font-medium text-sm">{message.name}</div>
							<div className="font-normal text-xs text-gray-600">
								{message.status}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
