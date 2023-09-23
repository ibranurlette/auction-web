import { IconSearch } from "../Icon";

interface ButtonOpenSearchProps {
	openMessage: boolean;
	openSearch: boolean;
	openNotif: boolean;
	isOpenSearch: (openSearch: boolean) => void;
	isOpenNotif: (openNotif: boolean) => void;
}

export const ButtonOpenSearch = ({
	openMessage,
	openSearch,
	openNotif,
	isOpenSearch,
	isOpenNotif,
}: ButtonOpenSearchProps) => {
	return (
		<div className="w-full text-black hover:text-black">
			<button
				className={`${
					!openSearch && !openMessage && !openNotif
						? "lg:px-3 lg:justify-start md:px-1 max-sm:px-1 md:justify-center max-sm:justify-center"
						: "px-1 justify-center w-3/4"
				} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100 lg:w-full md:w-12 max-sm:w-12`}
				onClick={() => {
					openNotif ? isOpenNotif(false) : isOpenSearch(!openSearch);
				}}
			>
				<IconSearch color="black" width="1.7em" height="1.7em" />
				{!openSearch && !openMessage && !openNotif ? (
					<h2 className="text-md font-normal ml-3 md:hidden max-sm:hidden sm:hidden lg:inline">
						Cari
					</h2>
				) : (
					""
				)}
			</button>
		</div>
	);
};
