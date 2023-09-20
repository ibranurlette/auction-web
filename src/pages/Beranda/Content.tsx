import {
	IconMenuHorizontal,
	IconComment,
	IconShare,
	IconLove,
	IconSave,
} from "../Icon";

interface ContentProps {
	data: {
		name: string;
		time: string;
		imageUrl: string;
	};
	customKey: number;
}

export const Content = ({ data, customKey }: ContentProps) => {
	const { name, time, imageUrl } = data;

	return (
		<div>
			<div className={`w-full h-3/5  ${customKey === 0 ? "mt-0" : "mt-10"}`}>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<img
							className="h-10 w-10 rounded-full mr-2"
							src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
							alt="nature image"
						/>
						<div className="mr-2 font-semibold text-black text-sm">{name}</div>
						<div className="text-sm text-gray-500">{time}</div>
					</div>
					<IconMenuHorizontal />
				</div>
				<img
					className="mt-2 rounded h-full w-full"
					src={imageUrl}
					alt="nature image"
				/>
				<div className="mt-2 flex items-center justify-between">
					<div className="flex item-center">
						<IconLove />
						<IconComment />
						<IconShare />
					</div>
					<IconSave />
				</div>
			</div>
		</div>
	);
};
