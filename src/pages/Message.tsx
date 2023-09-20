export const Message = () => {
	const message = [
		{
			name: "Nfia",
			status: "Aktif 2 menit lalu",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "Al",
			status: "Aktif 20 menit lalu",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "Andik Setyawan",
			status: "Aktif 1 jam lalu",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
		{
			name: "OYAGON",
			status: "Aktif 16 jam lalu",
			image:
				"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
		},
	];

	return (
		<div className="flex flex-row">
			{/* <h1 className="">Pesan disini</h1> */}
			<div className="basis-1/3 mt-10">
				{message.map((message, index) => (
					<div key={index} className="flex items-center mb-5 mx-5">
						<img
							className="h-14 w-14 rounded-full mr-4"
							src={message.image}
							alt="nature image"
						/>
						<div>
							<div className="font-medium text-sm">{message.name}</div>
							<div className="font-normal text-xs text-gray-600">
								{message.status}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="h-screen bg-gray-200 w-px basis-px"></div>

			{/* <div className="basis-full self-center text-center">
				<div className="font-medium text-xl text-black">Pesan Anda</div>
				<div className="font-normal text-sm text-gray-500 mb-4">
				Kirim foto dan pesan pribadi ke teman atau grup
				</div>
				<button className="bg-blue-500 text-white font-semibold py-1 px-3 text-sm">
				Kirim pesan
				</button>
			</div> */}

			<div className="basis-full h-screen flex flex-col justify-between">
				<div>
					<div>
						<div className="flex items-center m-4">
							<img
								className="h-12 w-12 rounded-full mr-4"
								src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
								alt="nature image"
							/>
							<div>
								<div className="font-medium text-sm ">Evry Nazyli Ciptanto</div>
								<div className="font-normal text-xs text-gray-600">
									Aktif 4 jam lalu
								</div>
							</div>
						</div>
						<div className="bg-gray-200 h-px" />
					</div>

					<div className="flex flex-col items-center mt-6">
						<img
							className="h-24 w-24 rounded-full mb-4"
							src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
							alt="nature image"
						/>
						<div className="font-bold text-lg">Evry Nazyli Ciptanto</div>
						<div className="text-sm font-medium text-gray-600">
							nazylievry · Instagram
						</div>
						<button className="bg-gray-200 font-semibold py-1 px-3 text-sm mt-4">
							Lihat Profil
						</button>
					</div>
				</div>
				<div className="p-4">
					<div className="w-full border border-gray-300 border-solid py-2 px-4 rounded-full flex justify-between">
						<div className="w-full flex">
							<svg
								viewBox="0 0 16 16"
								fill="currentColor"
								height="1.7em"
								width="1.7em"
								className="inline-block mr-3"
							>
								<path
									fillRule="evenodd"
									d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
								/>
							</svg>
							<textarea
								placeholder="Kirim pesan..."
								className="w-full rounded-md resize-y font-medium focus:outline-none"
								rows={1}
							/>
						</div>
						<svg
							viewBox="0 0 512 512"
							fill="currentColor"
							height="1.7em"
							width="1.7em"
						>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinejoin="round"
								strokeWidth={32}
								d="M96 80 H416 A48 48 0 0 1 464 128 V384 A48 48 0 0 1 416 432 H96 A48 48 0 0 1 48 384 V128 A48 48 0 0 1 96 80 z"
							/>
							<path
								fill="none"
								stroke="currentColor"
								strokeMiterlimit={10}
								strokeWidth={32}
								d="M368 176 A32 32 0 0 1 336 208 A32 32 0 0 1 304 176 A32 32 0 0 1 368 176 z"
							/>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={32}
								d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
