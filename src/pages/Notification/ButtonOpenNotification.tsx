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
		<button
			className={`${
				!openNotif && !openMessage
					? "px-3 justify-start w-full"
					: "px-1 justify-center w-3/4"
			} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
			onClick={() => isOpenNotif(!openNotif)}
		>
			<IconNotification />
			{!openNotif && !openMessage ? (
				<h2 className="text-md font-normal ml-3">Notifikasi</h2>
			) : (
				""
			)}
		</button>
	);
};
