import { useState } from "react";

interface ModalCreateProps {
	openNotif: boolean;
}

export const ModalCreate = ({ openNotif }: ModalCreateProps) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button
				className={`${
					!openNotif ? "px-3 justify-start w-full" : "px-1 justify-center w-3/4"
				} bg-white flex items-center py-2 mr-3 hover:border-transparent hover:bg-gray-100`}
				onClick={() => setShowModal(true)}
			>
				<svg
					viewBox="0 0 512 512"
					fill="currentColor"
					height="1.7em"
					width="1.7em"
				>
					<path
						fill="none"
						stroke="currentColor"
						strokeMiterlimit={10}
						strokeWidth={32}
						d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
					/>
					<path
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={32}
						d="M256 176v160M336 256H176"
					/>
				</svg>
				{!openNotif ? <h2 className="text-md font-normal ml-3">Buat</h2> : ""}
			</button>
			{/* <h2 className="text-md font-normal ml-3">Buat</h2> */}
			{showModal ? (
				<>
					<div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative my-6 mx-auto ">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-center justify-between p-2 border-b border-solid border-slate-200 rounded-t">
									<h4 className="text-lg font-semibold text-black ">
										Buat lelang baru
									</h4>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto self-center">
									<p className="my-4 text-slate-500 text-lg leading-relaxed text-center">
										Upload foto disini
									</p>

									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
										Pilih dari komputer
									</button>
								</div>
								{/*footer*/}
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
