import { IconCreated } from "../Icon";
interface ButtonOpenCreateProps {
	openNotif: boolean;
	openMessage: boolean;
	isOpen: () => void;
}
export const ButtonOpenCreate = ({
	openNotif,
	openMessage,
	isOpen,
}: ButtonOpenCreateProps) => {
	return (
		<button
			className={`${
				!openNotif && !openMessage
					? "px-3 justify-start w-full"
					: "px-1 justify-center w-3/4"
			} bg-white flex items-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
			onClick={isOpen}
		>
			<IconCreated />
			{!openNotif && !openMessage ? (
				<h2 className="text-md font-normal ml-3">Buat</h2>
			) : (
				""
			)}
		</button>
	);
};
