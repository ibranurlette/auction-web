import { ButtonOpenNotification } from "./ButtonOpenNotification";
import { ModalNotification } from "./ModalNotification";
import {
	notificationByDay,
	notificationByWeek,
	notificationByMonth,
} from "./data.json";

interface ModalNotificationProps {
	isOpenMessage: (openMessage: boolean) => void;
	isOpenNotif: (openNotif: boolean) => void;
	openNotif: boolean;
	openMessage: boolean;
}

export const Notification = ({
	isOpenNotif,
	openNotif,
	openMessage,
}: ModalNotificationProps) => {
	return (
		<>
			<ButtonOpenNotification
				openNotif={openNotif}
				openMessage={openMessage}
				isOpenNotif={isOpenNotif}
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
