import { useState } from "react";
import { IconCreated, IconCreatedOutline } from "../Icon";

interface ActiveState {
	beranda: boolean;
	search: boolean;
	explore: boolean;
	message: boolean;
	notification: boolean;
	create: boolean;
	profil: boolean;
}

interface ButtonOpenCreateProps {
	openNotif: boolean;
	openMessage: boolean;
	openSearch: boolean;
	active: ActiveState;
	isOpen: () => void;
	isActive: React.Dispatch<React.SetStateAction<ActiveState>>;
	setPreviousActive: React.Dispatch<React.SetStateAction<ActiveState>>;
}
export const ButtonOpenCreate = ({
	openNotif,
	openMessage,
	openSearch,
	active,
	isOpen,
	isActive,
	setPreviousActive,
}: ButtonOpenCreateProps) => {
	return (
		<div className="w-full text-black hover:text-black">
			<button
				className={`${
					!openNotif && !openMessage && !openSearch
						? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center"
						: "px-1 justify-center w-3/4"
				} bg-white flex items-center py-2 mr-3 hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
				onClick={() => {
					isOpen();
					setPreviousActive({ ...active });
					isActive((prevState) => ({
						...prevState,
						create: true,
					}));
				}}
			>
				{active.create ? <IconCreated /> : <IconCreatedOutline />}
				{!openNotif && !openMessage && !openSearch ? (
					<h2
						className={`${
							active.create ? "font-bold" : "font-normal"
						}text-md ml-3 md:hidden max-sm:hidden sm:hidden lg:inline`}
					>
						Buat
					</h2>
				) : (
					""
				)}
			</button>
		</div>
	);
};
