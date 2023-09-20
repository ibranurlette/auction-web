import { IconComment } from "./Icon/IconComment";
import { IconLove } from "./Icon/IconLove";
import { IconMenuHorizontal } from "./Icon/IconMenuHorizontal";
import { IconSave } from "./Icon/IconSave";
import { IconShare } from "./Icon/IconShare";

export const Beranda = () => {
	const berandaData = [
		{
			name: "nurfia",
			time: "2 menit",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "ibra_nurlette",
			time: "20 menit",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "alfian",
			time: "1 jam",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "baikhakiDev",
			time: "16 jam",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
	];

	return (
		<div className="h-full mt-10 mb-10">
			{berandaData.map((item, index) => (
				<div
					key={index}
					className={`w-1/2 h-3/5  ${index === 0 ? "mt-0" : "mt-28"}`}
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<img
								className="h-10 w-10 rounded-full mr-2"
								src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
								alt="nature image"
							/>
							<div className="mr-2 font-semibold text-black text-sm">
								{item.name}
							</div>
							<div className="text-sm text-gray-500">{item.time}</div>
						</div>
						<IconMenuHorizontal />
					</div>
					<img
						className="mt-2 rounded h-full"
						src={item.image}
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
			))}
		</div>
	);
};
