import { ButtonOpenSearch } from "./ButtonOpenSearch";
import { ModalSearch } from "./ModalSearch";
import { history } from "./data.json";

interface ActiveState {
	beranda: boolean;
	search: boolean;
	explore: boolean;
	message: boolean;
	notification: boolean;
	create: boolean;
	profil: boolean;
}

interface ModalSearchProps {
	isOpenMessage: (openMessage: boolean) => void;
	isOpenSearch: (openSearch: boolean) => void;
	isOpenNotif: (openNotif: boolean) => void;
	isActive: React.Dispatch<React.SetStateAction<ActiveState>>;
	openMessage: boolean;
	openSearch: boolean;
	openNotif: boolean;
	active: ActiveState;
}

export const Search = ({
	isOpenSearch,
	isOpenNotif,
	isActive,
	openMessage,
	openSearch,
	openNotif,
	active,
}: ModalSearchProps) => {
	return (
		<>
			<ButtonOpenSearch
				openMessage={openMessage}
				openSearch={openSearch}
				openNotif={openNotif}
				active={active}
				isOpenSearch={isOpenSearch}
				isOpenNotif={isOpenNotif}
				isActive={isActive}
			/>
			{openSearch ? <ModalSearch history={history} /> : null}
		</>
	);
};
