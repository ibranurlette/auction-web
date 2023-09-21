import { useState } from "react";
import { CreateLelang } from "./CreateLelang";
import { Notification } from "./Notification";
import { IconBeranda, IconMessage, IconOther } from "./Icon";

export const Sidebar = () => {
	const [openNotif, setOpenNotif] = useState<boolean>(false);
	const [openMessage, setOpenMessage] = useState<boolean>(false);

	return (
		<div
			className={`${
				!openNotif && !openMessage
					? "lg:w-2/6 md:w-20 max-sm:w-20 sm:w-20"
					: "w-20"
			} mt-6 ml-3 flex flex-col justify-between mb-5`}
		>
			{/* Sidebar content */}
			<div>
				<h2 className="text-xl font-semibold ml-4">
					{openNotif || openMessage ? (
						"LD"
					) : (
						<>
							<span className="hidden max-sm:inline sm:inline md:inline lg:hidden">
								LD
							</span>
							<span className="hidden md:hidden max-sm:hidden sm:hidden lg:inline">
								LelangID
							</span>
						</>
					)}
				</h2>
				<ul className="space-y-6 mt-10 ">
					<li className="flex items-center">
						<button
							className={`${
								!openNotif && !openMessage
									? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center lg:w-full md:w-3/4 max-sm:w-3/4 bg-gray-200"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<IconBeranda />
							{!openNotif && !openMessage ? (
								<>
									<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
										Beranda
									</h2>
								</>
							) : (
								""
							)}
						</button>
					</li>
					<li className="flex items-center">
						<button
							onClick={() => setOpenMessage(true)}
							className={`${
								!openNotif && !openMessage
									? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center lg:w-full md:w-3/4 max-sm:w-3/4"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<IconMessage />
							{!openNotif && !openMessage ? (
								<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
									Pesan
								</h2>
							) : (
								""
							)}
						</button>
					</li>
					<li className="flex items-center">
						<Notification
							openMessage={openMessage}
							openNotif={openNotif}
							isOpenNotif={setOpenNotif}
							isOpenMessage={setOpenMessage}
						/>
					</li>
					<li className="flex items-center">
						<CreateLelang openMessage={openMessage} openNotif={openNotif} />
					</li>

					<li className="flex items-center">
						<button
							className={`${
								!openNotif && !openMessage
									? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center lg:w-full md:w-3/4 max-sm:w-3/4"
									: "px-1 justify-center w-3/4"
							} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
						>
							<img
								className="h-7 w-7 rounded-full border-black border-2 border-solid"
								src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
								alt="nature image"
							/>
							{!openNotif && !openMessage ? (
								<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
									Profil
								</h2>
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
							? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center lg:w-full md:w-3/4 max-sm:w-3/4"
							: "px-1 justify-center w-3/4"
					} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
				>
					<IconOther />
					{!openNotif && !openMessage ? (
						<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
							Lainnya
						</h2>
					) : (
						""
					)}
				</button>
			</div>
		</div>
	);
};
