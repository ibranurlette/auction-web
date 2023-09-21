export const InfoProfil = () => {
	return (
		<div className="flex justify-center items-center mt-6 pb-6 border-b">
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
	);
};
