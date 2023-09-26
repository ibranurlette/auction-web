import { IconEye } from "../Icon";
export const InfoProfil = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-6 pb-6 border-b">
				<img
					className="lg:h-40 lg:w-40 max-sm:h-20 max-sm:w-20 sm:h-20 sm:w-20 md:h-20 md:w-20 rounded-full md:mr-10 max-sm:mr-6 sm:mr-6"
					src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
					alt="nature image"
				/>
				<div className="space-y-4">
					<div className="md:flex items-center justify-between">
						<h1 className="mr-4 text-xl">beta_ibra</h1>
						<button className="bg-gray-100 px-4 py-1 rounded-md font-medium">
							Edit profil
						</button>
					</div>

					<div className="flex space-x-2 max-sm:hidden sm:hidden lg:inline-flex">
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
				<div className="bg-gray-100 rounded-lg border-solid p-4 ml-6">
					<div className="flex justify-between">
						<div className="mr-2 text-sm font-light">Saldo</div>
						{/* <div>hide</div> */}
						<IconEye />
					</div>
					<div className="font-medium text-xl text-gray-600 my-2">
						Rp. 10.000.100
					</div>
					<div className="text-sm font-medium">LelangID</div>
				</div>
			</div>

			<div className="flex space-x-2 justify-center text-center py-4 lg:hidden">
				<div>
					<p className="font-bold">49</p>
					<p className="text-gray-500 text-md font-medium">kiriman</p>
				</div>
				<div>
					<p className="font-bold">599</p>
					<p className="text-gray-500 text-md font-medium">pengikut</p>
				</div>
				<div>
					<p className="font-bold">356</p>
					<p className="text-gray-500 text-md font-medium">diikuti</p>
				</div>
			</div>
		</>
	);
};
