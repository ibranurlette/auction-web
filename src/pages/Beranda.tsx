export const Beranda = () => {
	const berandaData = [
		{
			name: "nurfia",
			time: "2 menit",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "ibra_nurlette",
			time: "20 menit",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "alfian",
			time: "1 jam",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "baikhakiDev",
			time: "16 jam",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
	];

	return (
		<div className="h-full mt-10 mb-10">
			{berandaData.map((item, index) => (
				<div
					key={index}
					className={`w-1/2 h-3/5  ${index === 0 ? "mt-0" : "mt-28"}`}
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<img
								className="h-10 w-10 rounded-full mr-2"
								src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
								alt="nature image"
							/>
							<div className="mr-2 font-semibold text-black text-sm">
								{item.name}
							</div>
							<div className="text-sm text-gray-500">{item.time}</div>
						</div>
						<div>
							<svg
								viewBox="0 0 21 21"
								fill="currentColor"
								height="1.7em"
								width="1.7em"
							>
								<g fill="currentColor" fillRule="evenodd">
									<path d="M11.5 10.5 A1 1 0 0 1 10.5 11.5 A1 1 0 0 1 9.5 10.5 A1 1 0 0 1 11.5 10.5 z" />
									<path d="M6.5 10.5 A1 1 0 0 1 5.5 11.5 A1 1 0 0 1 4.5 10.5 A1 1 0 0 1 6.5 10.5 z" />
									<path d="M16.5 10.5 A1 1 0 0 1 15.5 11.5 A1 1 0 0 1 14.5 10.5 A1 1 0 0 1 16.5 10.5 z" />
								</g>
							</svg>
						</div>
					</div>
					<img
						className="mt-2 rounded h-full"
						src={item.image}
						alt="nature image"
					/>
					<div className="mt-2 flex items-center justify-between">
						<div className="flex item-center">
							<svg
								viewBox="0 0 1024 1024"
								fill="currentColor"
								height="1.7em"
								width="1.7em"
								className="mr-4"
							>
								<path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
							</svg>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								height="1.7em"
								width="1.7em"
								className="mr-4"
							>
								<path d="M12 2A10 10 0 002 12a9.89 9.89 0 002.26 6.33l-2 2a1 1 0 00-.21 1.09A1 1 0 003 22h9a10 10 0 000-20zm0 18H5.41l.93-.93a1 1 0 000-1.41A8 8 0 1112 20z" />
							</svg>
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								viewBox="0 0 24 24"
								height="1.7em"
								width="1.7em"
								className="mr-4"
							>
								<path d="M21 5 A3 3 0 0 1 18 8 A3 3 0 0 1 15 5 A3 3 0 0 1 21 5 z" />
								<path d="M9 12 A3 3 0 0 1 6 15 A3 3 0 0 1 3 12 A3 3 0 0 1 9 12 z" />
								<path d="M21 19 A3 3 0 0 1 18 22 A3 3 0 0 1 15 19 A3 3 0 0 1 21 19 z" />
								<path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
							</svg>
						</div>
						<svg fill="none" viewBox="0 0 15 15" height="1.7em" width="1.7em">
							<path
								fill="currentColor"
								fillRule="evenodd"
								d="M3 2.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v11a.5.5 0 01-.765.424L7.5 11.59l-3.735 2.334A.5.5 0 013 13.5v-11zM4 3v9.598l2.97-1.856a1 1 0 011.06 0L11 12.598V3H4z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</div>
			))}
		</div>
	);
};
