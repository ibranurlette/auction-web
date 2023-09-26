import { useState } from "react";
import {
	IconMenuHorizontal,
	IconComment,
	IconShare,
	IconLove,
	IconSave,
	IconArrowUp,
} from "../Icon";

interface ContentProps {
	data: {
		name: string;
		time: string;
		imageUrl: string;
	};
}

export const Content = ({ data }: ContentProps) => {
	const { name, time, imageUrl } = data;
	const [showMore, setShowMore] = useState(false);

	const text =
		"500K!!!!! 🎊🎊🎊🎊🎊 thanks to everyone for being a part of this amazing journey. I didn’t have a clue what would happen to me";

	const toggleText = () => {
		setShowMore(!showMore);
	};

	return (
		<div>
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
			<div className="relative">
				<img
					className="mt-2 rounded h-60 w-full"
					src={imageUrl}
					alt="nature image"
				/>
				<div className="absolute bottom-2 right-2 bg-black bg-opacity-40 text-white p-1 rounded">
					<div className="flex items-center">
						<IconArrowUp className="text-white" />
						<div className="ml-2">Rp 1.000.000</div>
					</div>
				</div>
			</div>
			<div className="mt-2 flex items-center justify-between">
				<div className="flex item-center">
					<IconLove />
					<IconComment />
					<IconShare />
				</div>
				<IconSave />
			</div>
			<div className="font-semibold text-sm text-black my-2">2,804 likes</div>
			<span className="mr-2 font-semibold text-black text-sm">{name}</span>
			<span className={`text-sm text-black text-justify`}>
				{showMore ? text : `${text.substring(0, 70)}...`}
			</span>
			<div>
				<button
					onClick={toggleText}
					className="text-gray-500 text-sm p-0 hover:border-transparent focus:outline-none"
				>
					{showMore ? "see less" : "see more"}
				</button>
			</div>
		</div>
	);
};
