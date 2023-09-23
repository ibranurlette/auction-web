import { useState } from "react";
import { ModalCreate } from "./ModalCreate";
import { ButtonOpenCreate } from "./ButtonOpenCreate";

interface ActiveState {
	beranda: boolean;
	search: boolean;
	explore: boolean;
	message: boolean;
	notification: boolean;
	create: boolean;
	profil: boolean;
}

interface CreateLelangProps {
	openNotif: boolean;
	openMessage: boolean;
	openSearch: boolean;
	active: ActiveState;
	isActive: React.Dispatch<React.SetStateAction<ActiveState>>;
}

export const CreateLelang = ({
	openNotif,
	openMessage,
	openSearch,
	active,
	isActive,
}: CreateLelangProps) => {
	const [previousActive, setPreviousActive] = useState({
		beranda: true,
		search: false,
		explore: false,
		message: false,
		notification: false,
		create: false,
		profil: false,
	});

	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<ButtonOpenCreate
				openNotif={openNotif}
				openMessage={openMessage}
				openSearch={openSearch}
				active={active}
				isActive={isActive}
				isOpen={() => setShowModal(true)}
				setPreviousActive={setPreviousActive}
			/>
			{showModal ? (
				<ModalCreate
					previousActive={previousActive}
					isClose={() => setShowModal(false)}
					isActive={isActive}
					active={active}
				/>
			) : null}
		</>
	);
};
