// Modal.js

interface ModalNotificationProps {
	isOpen: (openNotif: boolean) => void;
	openNotif: boolean;
}

export const ModalNotification = ({
	isOpen,
	openNotif,
}: ModalNotificationProps) => {
	const notficationByDay = [
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "alfian",
			description: "menyukai postingan anda",
			time: "1 menit",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "alfian",
			description: "menyukai postingan anda",
			time: "5 menit",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "alfian",
			description: "menyukai postingan anda",
			time: "5 jam",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "alfian",
			description: "menyukai postingan anda",
			time: "23 jam",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
	];
	const notficationByWeek = [
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "baihaki",
			description: "menyukai postingan anda",
			time: "1 hari",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "baihaki",
			description: "menyukai postingan anda",
			time: "5 hari",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "baihaki",
			description: "menyukai postingan anda",
			time: "5 hari",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "baihaki",
			description: "menyukai postingan anda",
			time: "6 hari",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
	];
	const notficationByMonth = [
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "ibra_nurlette",
			description: "menyukai postingan anda",
			time: "1 minggu",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "ibra_nurlette",
			description: "menyukai postingan anda",
			time: "4 minggu",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "ibra_nurlette",
			description: "menyukai postingan anda",
			time: "3 minggu",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			profil:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
			name: "ibra_nurlette",
			description: "menyukai postingan anda",
			time: "2 minggu",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
	];

	return (
		<>
			<button
				className={`${
					!openNotif ? "px-3 justify-start w-full" : "px-1 justify-center w-3/4"
				} bg-white flex items-center text-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
				onClick={() => isOpen(!openNotif)}
			>
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					height="1.7em"
					width="1.7em"
				>
					<path d="M15 19a3 3 0 01-6 0H4a1 1 0 010-2h1v-6a7 7 0 014.02-6.34 3 3 0 015.96 0A7 7 0 0119 11v6h1a1 1 0 010 2h-5zm-4 0a1 1 0 002 0h-2zm0-12.9A5 5 0 007 11v6h10v-6a5 5 0 00-4-4.9V5a1 1 0 00-2 0v1.1z" />
				</svg>

				{!openNotif ? (
					<h2 className="text-md font-normal ml-3">Notifikasi</h2>
				) : (
					""
				)}
			</button>
			{openNotif ? (
				<div className="flex items-center justify-center ">
					<div className="bg-white p-4 overflow-y-scroll bottom-0 h-screen w-1/4 fixed left-24 shadow-[rgba(0,0,15,0.2)_6px_5px_4px_0px] rounded-xl">
						<h2 className="font-bold text-2xl text-black">Notifikasi</h2>
						<div className="font-bold text-md text-black my-3">Hari Ini</div>

						{notficationByDay.map((notification, index) => (
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

						{notficationByWeek.map((notification, index) => (
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

						{notficationByMonth.map((notification, index) => (
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
			) : null}
		</>
	);
};
