import { ButtonOpenSearch } from "./ButtonOpenSearch";
import { ModalSearch } from "./ModalSearch";
import { history } from "./data.json";

interface ModalSearchProps {
	isOpenMessage: (openMessage: boolean) => void;
	isOpenSearch: (openSearch: boolean) => void;
	isOpenNotif: (openNotif: boolean) => void;
	openMessage: boolean;
	openSearch: boolean;
	openNotif: boolean;
}

export const Search = ({
	isOpenSearch,
	isOpenNotif,
	openMessage,
	openSearch,
	openNotif,
}: ModalSearchProps) => {
	return (
		<>
			<ButtonOpenSearch
				openMessage={openMessage}
				openSearch={openSearch}
				openNotif={openNotif}
				isOpenSearch={isOpenSearch}
				isOpenNotif={isOpenNotif}
			/>
			{openSearch ? <ModalSearch history={history} /> : null}
			{openSearch ? <ModalSearch history={history} /> : null}
		</>
	);
};
