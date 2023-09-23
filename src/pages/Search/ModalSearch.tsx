import { IconCancel, IconSearch } from "../Icon";

interface ModalSearchProps {
	history: {
		profil: string;
		username: string;
		fullName: string;
	}[];
}

export const ModalSearch = ({ history }: ModalSearchProps) => {
	return (
		<div className="flex items-center justify-center ">
			<div
				style={{ left: 64 }}
				className="bg-white py-6 overflow-y-scroll bottom-0 h-screen lg:w-80 md:w-80 max-sm:w-80 sm:w-80  fixed  shadow-[rgba(0,0,15,0.2)_6px_5px_4px_0px] rounded-xl"
			>
				<h2 className="font-bold text-2xl text-black px-4 ">Cari</h2>
				<div className="border-b px-4">
					<div className="bg-gray-100 py-1 hover:border-gray-100 my-6 px-2 border flex items-center justify-between  shadow appearance-none  rounded-lg  w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
						<div className="flex items-center w-full">
							<IconSearch color="gray" width="1.3em" height="1.3em" />
							<input
								type="text"
								name="cari"
								className="ml-3 bg-gray-100 border border-gray-100 placeholder-slate-400 focus:outline-none focus:border-gray-100 focus:ring-gray-100 block w-full rounded-md sm:text-sm focus:ring-1"
								placeholder="Cari"
							/>
						</div>
						<div className="bg-gray-300 rounded-full">
							<IconCancel width="1em" height="1em" color="white" />
						</div>
					</div>
				</div>

				<div className="px-4">
					<div className="flex items-center justify-between py-4">
						<div className="font-bold text-md text-black">Terbaru</div>
						<div className="font-bold text-sm text-blue-500">Hapus Semua</div>
					</div>

					{history.map((history, index) => (
						<div key={index} className="flex items-center pb-4 justify-between">
							<div className="flex items-center">
								<img
									className="h-12 w-12 rounded-full"
									src={history.profil}
									alt="nature image"
								/>
								<div className="ml-3">
									<div className="font-semibold text-sm">
										{history.username}
									</div>
									<div className="font-light text-sm">{history.fullName}</div>
								</div>
							</div>
							<IconCancel width="1.7em" height="1.7em" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
