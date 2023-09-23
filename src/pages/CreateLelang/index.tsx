import { useState } from "react";
import { ModalCreate } from "./ModalCreate";
import { ButtonOpenCreate } from "./ButtonOpenCreate";

interface CreateLelangProps {
	openNotif: boolean;
	openMessage: boolean;
	openSearch: boolean;
}

export const CreateLelang = ({
	openNotif,
	openMessage,
	openSearch,
}: CreateLelangProps) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<ButtonOpenCreate
				openNotif={openNotif}
				openMessage={openMessage}
				openSearch={openSearch}
				isOpen={() => setShowModal(true)}
			/>
			{showModal ? <ModalCreate isClose={() => setShowModal(false)} /> : null}
		</>
	);
};
