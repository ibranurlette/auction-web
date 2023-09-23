import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CreateLelang } from "./CreateLelang";
import { Notification } from "./Notification";
import { Search } from "./Search";
import { IconBeranda, IconMessage, IconOther, IconCompass } from "./Icon";
import logo from "../assets/LD-logo.png";

export const Sidebar = () => {
	const [openNotif, setOpenNotif] = useState<boolean>(false);
	const [openMessage, setOpenMessage] = useState<boolean>(false);
	const [openSearch, setOpenSearch] = useState<boolean>(false);

	return (
		<div
			className={`${
				!openNotif && !openMessage && !openSearch
					? "lg:w-2/6 md:w-16 max-sm:w-16 sm:w-16"
					: "w-16"
			}  flex flex-col justify-between px-2 border-r`}
		>
			{/* Sidebar content */}
			<div className="mt-6">
				<h2 className="text-xl font-semibold">
					{openNotif || openMessage || openSearch ? (
						// "LD"
						<img src={logo} alt="LD-logo" />
					) : (
						<>
							<span className="hidden max-sm:inline sm:inline md:inline lg:hidden">
								{/* LD */}
								<img src={logo} alt="LD-logo" />
							</span>
							<span className="hidden md:hidden max-sm:hidden sm:hidden lg:inline ml-3">
								LelangID
							</span>
						</>
					)}
				</h2>
				<ul className="space-y-6 mt-10 ">
					<li className="flex items-center">
						<NavLink to="/" className="w-full text-black hover:text-black">
							<button
								onClick={() => {
									setOpenMessage(false);
									setOpenNotif(false);
									setOpenSearch(false);
								}}
								className={`${
									!openNotif && !openMessage && !openSearch
										? "lg:px-3 md:px-1 max-sm:px-1 lg:justify-start md:justify-center max-sm:justify-center bg-gray-200"
										: "px-1 justify-center w-3/4"
								} bg-white flex items-center text-center hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
							>
								<IconBeranda />
								{!openNotif && !openMessage && !openSearch ? (
									<>
										<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
											Beranda
										</h2>
									</>
								) : (
									""
								)}
							</button>
						</NavLink>
					</li>
					<li className="flex items-center">
						<Search
							openMessage={openMessage}
							openNotif={openNotif}
							openSearch={openSearch}
							isOpenMessage={setOpenMessage}
							isOpenSearch={setOpenSearch}
							isOpenNotif={setOpenNotif}
						/>
					</li>
					{/* <li className="flex items-center">
						<NavLink
							to="/search"
							className="w-full text-black hover:text-black"
						>
							<button
								onClick={() => {
									setOpenMessage(false);
									setOpenNotif(false);
									setOpenSearch(false);
								}}
								className={`${
									!openNotif && !openMessage && !openSearch
										? "lg:px-3 md:px-1 max-sm:px-1 lg:justify-start md:justify-center max-sm:justify-center bg-gray-200"
										: "px-1 justify-center w-3/4"
								} bg-white flex items-center text-center hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
							>
								<IconCompass />
								{!openNotif && !openMessage && !openSearch ? (
									<>
										<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
											Jelajahi
										</h2>
									</>
								) : (
									""
								)}
							</button>
						</NavLink>
					</li> */}
					<li className="flex items-center">
						<NavLink to="/pesan" className="w-full text-black hover:text-black">
							<button
								onClick={() => {
									setOpenMessage(true);
									setOpenNotif(false);
									setOpenSearch(false);
								}}
								className={`${
									!openNotif && !openMessage && !openSearch
										? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center"
										: "px-1 justify-center w-3/4"
								} bg-white flex items-center text-center hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
							>
								<IconMessage />
								{!openNotif && !openMessage && !openSearch ? (
									<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
										Pesan
									</h2>
								) : (
									""
								)}
							</button>
						</NavLink>
					</li>
					<li className="flex items-center">
						<Notification
							openMessage={openMessage}
							openNotif={openNotif}
							openSearch={openSearch}
							isOpenNotif={setOpenNotif}
							isOpenMessage={setOpenMessage}
						/>
					</li>
					<li className="flex items-center">
						<CreateLelang
							openMessage={openMessage}
							openNotif={openNotif}
							openSearch={openSearch}
						/>
					</li>

					<li className="flex items-center">
						<NavLink
							to="/profile"
							className="w-full text-black hover:text-black"
						>
							<button
								onClick={() => {
									setOpenMessage(false);
									setOpenNotif(false);
									setOpenSearch(false);
								}}
								className={`${
									!openNotif && !openMessage && !openSearch
										? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center"
										: "px-1 justify-center w-3/4"
								} bg-white flex items-center text-center hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
							>
								<img
									className="h-7 w-7 rounded-full border-black border-2 border-solid"
									src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
									alt="nature image"
								/>
								{!openNotif && !openMessage && !openSearch ? (
									<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
										Profil
									</h2>
								) : (
									""
								)}
							</button>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="flex items-center mb-6">
				<button
					className={`${
						!openNotif && !openMessage && !openSearch
							? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1  md:justify-center max-sm:justify-center"
							: "px-1 justify-center w-3/4"
					} py-0 bg-white flex items-center text-center hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
				>
					<IconOther />
					{!openNotif && !openMessage && !openSearch ? (
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
