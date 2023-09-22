import { IconNotification } from "../Icon";

interface ButtonOpenNotification {
	openNotif: boolean;
	openMessage: boolean;
	isOpenNotif: (openNotif: boolean) => void;
}

export const ButtonOpenNotification = ({
	openNotif,
	openMessage,
	isOpenNotif,
}: ButtonOpenNotification) => {
	return (
		<div className="w-full text-black hover:text-black">
			<button
				className={`${
					!openNotif && !openMessage
						? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center"
						: "px-1 justify-center w-3/4"
				} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
				onClick={() => isOpenNotif(!openNotif)}
			>
				<IconNotification />
				{!openNotif && !openMessage ? (
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
