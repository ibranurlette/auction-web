import { imageSource, images } from "./data.json";

export const ProductLelang = () => {
	const rows: JSX.Element[] = [];
	let currentRow: JSX.Element[] = [];

	images.forEach((image, index) => {
		currentRow.push(
			<div key={image.id} className="flex-1 p-0.5 justify-center">
				<img src={imageSource} alt={image.caption} className="w-full h-80" />
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
			<h4 className="font-semibold text-sm my-4 text-center">BARANG LELANG</h4>
			<div className="flex flex-col justify-center px-6 pb-6">{rows}</div>
		</>
	);
};
