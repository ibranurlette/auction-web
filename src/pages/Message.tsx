import { IconImage } from "./Icon/IconImage";
import { IconSmile } from "./Icon/IconSmile";

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
							<IconSmile />
							<textarea
								placeholder="Kirim pesan..."
								className="w-full rounded-md resize-y font-medium focus:outline-none"
								rows={1}
							/>
						</div>
						<IconImage />
					</div>
				</div>
			</div>
		</div>
	);
};
