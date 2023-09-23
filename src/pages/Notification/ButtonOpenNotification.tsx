import { IconNotificationOutline, IconNotification } from "../Icon";

interface ActiveState {
	beranda: boolean;
	search: boolean;
	explore: boolean;
	message: boolean;
	notification: boolean;
	create: boolean;
	profil: boolean;
}

interface ButtonOpenNotification {
	openNotif: boolean;
	openSearch: boolean;
	openMessage: boolean;
	active: ActiveState;
	isOpenNotif: (openNotif: boolean) => void;
	isActive: React.Dispatch<React.SetStateAction<ActiveState>>;
}

export const ButtonOpenNotification = ({
	openNotif,
	openSearch,
	openMessage,
	isOpenNotif,
	active,
	isActive,
}: ButtonOpenNotification) => {
	return (
		<div className="w-full text-black hover:text-black">
			<button
				className={`${
					active.notification
						? "border border-gray-300 border-solid px-1 justify-center w-3/4"
						: !openNotif && !openMessage && !openSearch
						? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center"
						: "px-1 justify-center w-3/4"
				} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
				onClick={() => {
					isOpenNotif(!openNotif);
					isActive((prevState) => ({
						...prevState,
						beranda: false,
						search: false,
						explore: false,
						message: false,
						notification: true,
						create: false,
						profil: false,
					}));
				}}
			>
				{active.notification ? (
					<IconNotification />
				) : (
					<IconNotificationOutline />
				)}
				{!openNotif && !openMessage && !openSearch ? (
					<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
						Notifikasi
					</h2>
				) : (
					""
				)}
			</button>
		</div>
	);
};
