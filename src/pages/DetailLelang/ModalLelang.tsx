import { useState } from "react";

export const ModalLelang = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleConfirm = () => {
		// Handle the confirmation logic here.
		// You can perform the action if the user confirms.
		// Close the modal after handling.
		closeModal();
	};

	return (
		<div>
			<button
				className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600"
				onClick={openModal}
			>
				BID Lelang
			</button>

			{isModalOpen && (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative my-6 mx-auto lg:w-1/2 sm:w-3/4 max-sm:w-4/5">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full  bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-center justify-between p-2 border-b border-solid border-slate-200 rounded-t">
									<h4 className="text-lg font-semibold text-black ">
										Apakah Kamu Yakin ?
									</h4>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => {
											closeModal();
										}}
									>
										<span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 self-center">
									<div>
										<p className="my-4 text-slate-500 text-lg leading-relaxed text-center">
											Pastikan saldo kamu cukup !!!
										</p>
										<p className="my-4 text-slate-500 text-lg leading-relaxed text-center">
											Harga Saat ini adalah Rp. 3.000.000
										</p>

										<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-6 px-4 rounded-lg w-full">
											Yakin
										</button>
									</div>
								</div>
								{/*footer*/}
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			)}
		</div>
	);
};
