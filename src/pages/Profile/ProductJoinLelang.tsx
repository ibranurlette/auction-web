import { IconArrowUp, IconCancel, IconTrophy } from "../Icon";
import { imageSource, images } from "./data.json";

export const ProductJoinLelang = () => {
	const rows: JSX.Element[] = [];
	let currentRow: JSX.Element[] = [];

	images.forEach((image, index) => {
		currentRow.push(
			<div key={image.id} className="flex-1 p-0.5 justify-center">
				{/* <img
					src={imageSource}
					alt={image.caption}
					className="w-full lg:h-80 md:h-60 max-sm:h-28 sm:40"
				/>
				 */}

				<div className="relative">
					<img
						className="rounded h-60 w-full"
						src={imageSource}
						alt={image.caption}
					/>
					<div className="absolute w-full bottom-0 bg-black bg-opacity-40 text-white p-2 rounded flex items-center justify-between">
						<div className="flex items-center">
							<IconArrowUp color="white" />
							<div className="ml-1 font-medium text-sm">Rp 1.000.000</div>
						</div>
						<div className="flex items-center">
							<IconTrophy color="white" />
							{/* <IconCancel color="white" width="1.2em" height="1.2em" /> */}
							<div className="ml-1 font-medium text-sm">Win</div>
						</div>
					</div>
				</div>
			</div>
		);

		if ((index + 1) % 3 === 0 || index === images.length - 1) {
			// Create a new row when there are three images in the current row or at the end of the images array.
			rows.push(
				<div key={index} className="flex justify-center">
					{currentRow}
				</div>
			);
			currentRow = [];
		}
	});

	return (
		<>
			<h4 className="font-semibold text-sm my-4 text-center">
				LELANG YANG DI IKUTI
			</h4>
			<div className="flex flex-col justify-center md:px-6 sm:px-6 max-sm:px-2 pb-6">
				{rows}
			</div>
		</>
	);
};
