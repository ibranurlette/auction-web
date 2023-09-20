interface NotificationProps {
	profil: string;
	name: string;
	description: string;
	time: string;
	image: string;
}

interface ModalNotificationProps {
	notificationByDay: NotificationProps[];
	notificationByWeek: NotificationProps[];
	notificationByMonth: NotificationProps[];
}

export const ModalNotification = ({
	notificationByDay,
	notificationByWeek,
	notificationByMonth,
}: ModalNotificationProps) => {
	return (
		<div className="flex items-center justify-center ">
			<div className="bg-white p-4 overflow-y-scroll bottom-0 h-screen w-1/4 fixed left-24 shadow-[rgba(0,0,15,0.2)_6px_5px_4px_0px] rounded-xl">
				<h2 className="font-bold text-2xl text-black">Notifikasi</h2>
				<div className="font-bold text-md text-black my-3">Hari Ini</div>

				{notificationByDay.map((notification, index) => (
					<div key={index} className="flex items-center mb-4">
						<img
							className="h-10 w-10 rounded-full"
							src={notification.image}
							alt="nature image"
						/>
						<div className="flex items-center ml-4">
							<div className="font-light text-sm">
								<div>
									<span className="font-semibold text-sm mr-2">
										{notification.name}
									</span>
									{notification.description}
									<span className="ml-1">{notification.time}</span>
								</div>
							</div>
						</div>
						<img
							className="h-10 w-10"
							src={notification.image}
							alt="nature image"
						/>
					</div>
				))}

				<div className="font-bold text-md text-black my-3">Minggu Ini</div>

				{notificationByWeek.map((notification, index) => (
					<div key={index} className="flex items-center mb-4">
						<img
							className="h-10 w-10 rounded-full"
							src={notification.image}
							alt="nature image"
						/>
						<div className="flex items-center ml-4">
							<div className="font-light text-sm">
								<div>
									<span className="font-semibold text-sm mr-2">
										{notification.name}
									</span>
									{notification.description}
									<span className="ml-1">{notification.time}</span>
								</div>
							</div>
						</div>
						<img
							className="h-10 w-10"
							src={notification.image}
							alt="nature image"
						/>
					</div>
				))}

				<div className="font-bold text-md text-black my-3">Bulan Ini</div>

				{notificationByMonth.map((notification, index) => (
					<div key={index} className="flex items-center mb-4">
						<img
							className="h-10 w-10 rounded-full"
							src={notification.profil}
							alt="nature image"
						/>
						<div className="flex items-center ml-4">
							<div className="font-light text-sm">
								<div>
									<span className="font-semibold text-sm mr-2">
										{notification.name}
									</span>
									{notification.description}
									<span className="ml-1">{notification.time}</span>
								</div>
							</div>
						</div>
						<img
							className="h-10 w-10"
							src={notification.image}
							alt="nature image"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
