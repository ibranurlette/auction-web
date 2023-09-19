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
					viewBox="0 0 1024 1024"
					fill="currentColor"
					height="1.7em"
					width="1.7em"
				>
					<path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
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
