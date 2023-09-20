import { useState } from "react";
import { ModalCreate } from "./ModalCreate";
import { ModalNotification } from "./ModalNotification";
import { IconBeranda } from "./Icon/IconBeranda";
import { IconMessage } from "./Icon/IconMessage";
import { IconOther } from "./Icon/IconOther";

export const Sidebar = () => {
	const [openNotif, setOpenNotif] = useState<boolean>(false);
	const [openMessage, setOpenMessage] = useState<boolean>(false);

	console.log;
	return (
		<div
			className={`${
				!openNotif && !openMessage ? "w-2/6" : "w-20"
			} mt-10 ml-3 flex flex-col justify-between mb-5`}
		>
			{/* Sidebar content */}
			<div>
				<h2 className="text-xl font-semibold ml-4">
					{openNotif || openMessage ? "LD" : "LelangID"}
				</h2>
				<ul className="space-y-6 mt-10 ">
					<li className="flex items-center">
						<button
							className={`${
								!openNotif && !openMessage
									? "px-3 justify-start w-full"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<IconBeranda />
							{!openNotif && !openMessage ? (
								<h2 className="text-md font-normal ml-3">Beranda</h2>
							) : (
								""
							)}
						</button>
					</li>
					<li className="flex items-center">
						<button
							onClick={() => setOpenMessage(!openMessage)}
							className={`${
								!openNotif && !openMessage
									? "px-3 justify-start w-full"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<IconMessage />
							{!openNotif && !openMessage ? (
								<h2 className="text-md font-normal ml-3">Pesan</h2>
							) : (
								""
							)}
						</button>
					</li>
					<li className="flex items-center">
						<ModalNotification
							openMessage={openMessage}
							openNotif={openNotif}
							isOpenNotif={setOpenNotif}
							isOpenMessage={setOpenMessage}
						/>
					</li>
					<li className="flex items-center">
						<ModalCreate openMessage={openMessage} openNotif={openNotif} />
					</li>

					<li className="flex items-center">
						<button
							className={`${
								!openNotif && !openMessage
									? "px-3 justify-start w-full"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<img
								className="h-7 w-7 rounded-full border-black border-2 border-solid"
								src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
								alt="nature image"
							/>
							{!openNotif && !openMessage ? (
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
						!openNotif && !openMessage
							? "px-3 justify-start w-full"
							: "px-1 justify-center w-3/4"
					} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
				>
					<IconOther />
					{!openNotif && !openMessage ? (
						<h2 className="text-md font-normal ml-3">Lainnya</h2>
					) : (
						""
					)}
				</button>
			</div>
		</div>
	);
};
