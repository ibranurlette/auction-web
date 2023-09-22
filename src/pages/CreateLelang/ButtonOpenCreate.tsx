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
		<div className="w-full text-black hover:text-black">
			<button
				className={`${
					!openNotif && !openMessage
						? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center"
						: "px-1 justify-center w-3/4"
				} bg-white flex items-center py-2 mr-3 hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
				onClick={isOpen}
			>
				<IconCreated />
				{!openNotif && !openMessage ? (
					<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
						Buat
					</h2>
				) : (
					""
				)}
			</button>
		</div>
	);
};
