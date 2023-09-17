export const Profile = () => {
	const imageSource =
		"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80";

	// An array of image data (you can fetch this from an API or provide your own data)
	const images = [
		{
			id: 1,
			caption: "Beautiful sunset view",
			likes: 1000,
		},
		{
			id: 2,
			caption: "Exploring nature",
			likes: 850,
		},
		{
			id: 3,
			caption: "Exploring nature",
			likes: 850,
		},
		{
			id: 4,
			caption: "Exploring nature",
			likes: 850,
		},
		{
			id: 5,
			caption: "Exploring nature",
			likes: 850,
		},
		{
			id: 6,
			caption: "Exploring nature",
			likes: 850,
		},
		{
			id: 7,
			caption: "Exploring nature",
			likes: 850,
		},
		{
			id: 8,
			caption: "Exploring nature",
			likes: 850,
		},
		{
			id: 9,
			caption: "Exploring nature",
			likes: 850,
		},
	];

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
			<div className="flex justify-center items-center mt-10">
				<img
					className="h-40 w-40 rounded-full mr-10"
					src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
					alt="nature image"
				/>
				<div className="space-y-4">
					<div className="flex items-center">
						<h1 className="mr-4 text-xl">beta_ibra</h1>
						<button className="bg-gray-200 px-4 py-1 rounded-md font-medium">
							Edit profil
						</button>
					</div>
					<div className="flex space-x-2">
						<div className="flex space-x-1">
							<p className="font-semibold">49</p>
							<p>kiriman</p>
						</div>
						<div className="flex space-x-1">
							<p className="font-semibold">599</p>
							<p>pengikut</p>
						</div>
						<div className="flex space-x-1">
							<p className="font-semibold">356</p>
							<p>diikuti</p>
						</div>
					</div>
					<h4 className="font-semibold text-sm">Ibra Nurlette</h4>
				</div>
			</div>

			<div className="h-px bg-gray-400 mt-10" />
			<div className="flex flex-col items-center justify-center">
				<div className="h-px bg-black w-20" />
				<h4 className="font-semibold text-sm my-4">POSTINGAN</h4>
			</div>

			<div className="flex flex-col justify-center">{rows}</div>
		</>
	);
};
