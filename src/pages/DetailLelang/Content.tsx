import { useState } from "react";
import {
	IconMenuHorizontal,
	IconComment,
	IconShare,
	IconLove,
	IconSave,
	IconArrowUp,
	IconTimer,
} from "../Icon";
import { ModalLelang } from "./ModalLelang";

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
					className="mt-2 rounded h-3/5 w-full"
					src={imageUrl}
					alt="nature image"
				/>
				<div className="absolute w-full bottom-0 bg-black bg-opacity-40 text-white p-2 rounded flex items-center justify-between">
					<div className="flex items-center">
						<IconArrowUp color="white" />
						<div className="ml-1 mr-2 font-medium text-sm">Rp 3.000.000</div>
						<div className="font-medium text-sm">
							oleh bpk. Baihaki Al Biruni
						</div>
					</div>
					<div className="flex items-center">
						<IconTimer color="white" />
						<div className="ml-1 font-medium text-sm">1 Hari </div>
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

			<h2 className="font-bold text-lg text-black mt-6 mb-4">
				PESERTA LELANG HONDA CIVIC 2000
			</h2>
			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="pr-6 py-3">
								Name
							</th>

							<th scope="col" className="pr-6 py-3">
								Harga
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Baihaki
							</th>
							<td className="pr-6 py-4">Rp 3.000.000</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<th
								scope="row"
								className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Alfian
							</th>
							<td className="pr-6 py-4">Rp 2.200.000</td>
						</tr>
						<tr className="bg-white dark:bg-gray-800">
							<th
								scope="row"
								className="pr-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
							>
								Asep Zainudin
							</th>
							<td className="pr-6 py-4">Rp 1.000.000</td>
						</tr>
					</tbody>
				</table>
			</div>
			<ModalLelang />
		</div>
	);
};
