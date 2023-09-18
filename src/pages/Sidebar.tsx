import { ModalCreate } from "./ModalCreate";
export const Sidebar = () => {
	return (
		<div className="w-2/6 mt-10 ml-3 flex flex-col justify-between mb-5">
			{/* Sidebar content */}
			<div>
				<h2 className="text-xl font-semibold ml-7">LelangID</h2>
				<ul className="space-y-6 mt-10 ">
					<li className="flex items-center">
						<button className="bg-white flex items-center w-full mr-3 hover:border-transparent hover:bg-gray-100">
							<svg
								viewBox="0 0 1024 1024"
								fill="currentColor"
								height="1.7em"
								width="1.7em"
							>
								<path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
							</svg>
							<h2 className="text-md font-normal ml-3">Beranda</h2>
						</button>
					</li>
					<li className="flex items-center">
						{/*
						 */}
						<button className="bg-white flex items-center w-full mr-3 hover:border-transparent hover:bg-gray-100">
							<svg
								fill="currentColor"
								viewBox="0 0 16 16"
								height="1.7em"
								width="1.7em"
							>
								<path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
								<path d="M2.165 15.803l.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 008 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 01-.524 2.318l-.003.011a10.722 10.722 0 01-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 00.693-.125zm.8-3.108a1 1 0 00-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 01-2.088-.272 1 1 0 00-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 00.398-2z" />
							</svg>
							<h2 className="text-md font-normal ml-3">Pesan</h2>
						</button>
					</li>
					<li className="flex items-center">
						<button className="bg-white flex items-center w-full mr-3 hover:border-transparent hover:bg-gray-100">
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								height="1.7em"
								width="1.7em"
							>
								<path d="M15 19a3 3 0 01-6 0H4a1 1 0 010-2h1v-6a7 7 0 014.02-6.34 3 3 0 015.96 0A7 7 0 0119 11v6h1a1 1 0 010 2h-5zm-4 0a1 1 0 002 0h-2zm0-12.9A5 5 0 007 11v6h10v-6a5 5 0 00-4-4.9V5a1 1 0 00-2 0v1.1z" />
							</svg>
							<h2 className="text-md font-normal ml-3">Notifikasi</h2>
						</button>
					</li>
					<li className="flex items-center">
						<ModalCreate />
					</li>
					<li className="flex items-center">
						<button className="bg-white flex items-center w-full mr-3 hover:border-transparent hover:bg-gray-100">
							<img
								className="h-7 w-7 rounded-full border-black border-2 border-solid"
								src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
								alt="nature image"
							/>
							<h2 className="text-md font-normal ml-3">Profil</h2>
						</button>
					</li>
				</ul>
			</div>

			<div className="flex items-center">
				<button className="bg-white flex items-center w-full mr-3 hover:border-transparent hover:bg-gray-100">
					<svg
						viewBox="0 0 1024 1024"
						fill="currentColor"
						height="1.7em"
						width="1.7em"
					>
						<path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
					</svg>
					<h2 className="text-md font-normal ml-3">Lainnya</h2>
				</button>
			</div>
		</div>
	);
};
