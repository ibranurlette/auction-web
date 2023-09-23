import { IconSearchOutline, IconSearch } from "../Icon";

interface ActiveState {
	beranda: boolean;
	search: boolean;
	explore: boolean;
	message: boolean;
	notification: boolean;
	create: boolean;
	profil: boolean;
}

interface ButtonOpenSearchProps {
	openMessage: boolean;
	openSearch: boolean;
	openNotif: boolean;
	active: ActiveState;
	isOpenSearch: (openSearch: boolean) => void;
	isOpenNotif: (openNotif: boolean) => void;
	isActive: React.Dispatch<React.SetStateAction<ActiveState>>;
}

export const ButtonOpenSearch = ({
	openMessage,
	openSearch,
	openNotif,
	active,
	isOpenSearch,
	isOpenNotif,
	isActive,
}: ButtonOpenSearchProps) => {
	return (
		<div className="w-full text-black hover:text-black">
			<button
				className={`${
					active.search
						? "border border-gray-300 border-solid px-1 justify-center w-3/4"
						: !openSearch && !openMessage && !openNotif
						? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center"
						: "px-1 justify-center w-3/4"
				} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
				onClick={() => {
					isActive((prevState) => ({
						...prevState,
						beranda: false,
						search: true,
						explore: false,
						message: false,
						notification: false,
						create: false,
						profil: false,
					}));
					openNotif ? isOpenNotif(false) : isOpenSearch(!openSearch);
				}}
			>
				{active.search ? (
					<IconSearch />
				) : (
					<IconSearchOutline color="black" width="1.7em" height="1.7em" />
				)}
				{!openSearch && !openMessage && !openNotif ? (
					<h2 className="font-normal text-md ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
						Cari
					</h2>
				) : (
					""
				)}
			</button>
		</div>
	);
};
