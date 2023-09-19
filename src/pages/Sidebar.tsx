import { useState } from "react";
import { ModalCreate } from "./ModalCreate";
import { ModalNotification } from "./ModalNotification";
export const Sidebar = () => {
	const [openNotif, setOpenNotif] = useState<boolean>(false);
	return (
		<div
			className={`${
				!openNotif ? "w-2/6" : "w-20"
			} mt-10 ml-3 flex flex-col justify-between mb-5`}
		>
			{/* Sidebar content */}
			<div>
				<h2 className="text-xl font-semibold ml-4">
					{openNotif ? "LD" : "LelangID"}
				</h2>
				<ul className="space-y-6 mt-10 ">
					<li className="flex items-center">
						<button
							className={`${
								!openNotif
									? "px-3 justify-start w-full"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								height="1.7em"
								width="1.7em"
							>
								<path d="M5 22h14a2 2 0 002-2v-9a1 1 0 00-.29-.71l-8-8a1 1 0 00-1.41 0l-8 8A1 1 0 003 11v9a2 2 0 002 2zm5-2v-5h4v5zm-5-8.59l7-7 7 7V20h-3v-5a2 2 0 00-2-2h-4a2 2 0 00-2 2v5H5z" />
							</svg>
							{!openNotif ? (
								<h2 className="text-md font-normal ml-3">Beranda</h2>
							) : (
								""
							)}
						</button>
					</li>
					<li className="flex items-center">
						{/*
						 */}
						<button
							className={`${
								!openNotif
									? "px-3 justify-start w-full"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								height="1.7em"
								width="1.7em"
							>
								<path d="M22.5 16h-2.2l1.7-4h-5v6h2v5l3.5-7M15 18h-1.1l-3.7 3.7c-.2.2-.4.3-.7.3H9c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6h-2V4H4v12h6v3.1l3.1-3.1H15v2z" />
							</svg>
							{!openNotif ? (
								<h2 className="text-md font-normal ml-3">Pesan</h2>
							) : (
								""
							)}
						</button>
					</li>
					<li className="flex items-center">
						<ModalNotification openNotif={openNotif} isOpen={setOpenNotif} />
					</li>
					<li className="flex items-center">
						<ModalCreate openNotif={openNotif} />
					</li>

					<li className="flex items-center">
						<button
							className={`${
								!openNotif
									? "px-3 justify-start w-full"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<img
								className="h-7 w-7 rounded-full border-black border-2 border-solid"
								src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
								alt="nature image"
							/>
							{!openNotif ? (
								<h2 className="text-md font-normal ml-3">Profil</h2>
							) : (
								""
							)}
						</button>
					</li>
				</ul>
			</div>

			<div className="flex items-center">
				<button
					className={`${
						!openNotif
							? "px-3 justify-start w-full"
							: "px-1 justify-center w-3/4"
					} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
				>
					<svg
						viewBox="0 0 1024 1024"
						fill="currentColor"
						height="1.7em"
						width="1.7em"
					>
						<path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
					</svg>
					{!openNotif ? (
						<h2 className="text-md font-normal ml-3">Lainnya</h2>
					) : (
						""
					)}
				</button>
			</div>
		</div>
	);
};
