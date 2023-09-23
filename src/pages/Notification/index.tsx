import { ButtonOpenNotification } from "./ButtonOpenNotification";
import { ModalNotification } from "./ModalNotification";
import {
	notificationByDay,
	notificationByWeek,
	notificationByMonth,
} from "./data.json";

interface ActiveState {
	beranda: boolean;
	search: boolean;
	explore: boolean;
	message: boolean;
	notification: boolean;
	create: boolean;
	profil: boolean;
}

interface ModalNotificationProps {
	isOpenMessage: (openMessage: boolean) => void;
	isOpenNotif: (openNotif: boolean) => void;
	isActive: React.Dispatch<React.SetStateAction<ActiveState>>;
	openNotif: boolean;
	openMessage: boolean;
	openSearch: boolean;
	active: ActiveState;
}

export const Notification = ({
	isOpenNotif,
	openNotif,
	openMessage,
	openSearch,
	active,
	isActive,
}: ModalNotificationProps) => {
	return (
		<>
			<ButtonOpenNotification
				openNotif={openNotif}
				openSearch={openSearch}
				openMessage={openMessage}
				isOpenNotif={isOpenNotif}
				active={active}
				isActive={isActive}
			/>
			{openNotif ? (
				<ModalNotification
					notificationByDay={notificationByDay}
					notificationByWeek={notificationByWeek}
					notificationByMonth={notificationByMonth}
				/>
			) : null}
		</>
	);
};
