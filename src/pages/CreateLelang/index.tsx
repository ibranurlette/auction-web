import { useState } from "react";
import { ModalCreate } from "./ModalCreate";
import { ButtonOpenCreate } from "./ButtonOpenCreate";

interface CreateLelangProps {
	openNotif: boolean;
	openMessage: boolean;
}

export const CreateLelang = ({ openNotif, openMessage }: CreateLelangProps) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<ButtonOpenCreate
				openNotif={openNotif}
				openMessage={openMessage}
				isOpen={() => setShowModal(true)}
			/>
			{showModal ? <ModalCreate isClose={() => setShowModal(false)} /> : null}
		</>
	);
};
