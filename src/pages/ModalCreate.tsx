import { useState } from "react";

export const ModalCreate = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button
				className="bg-white flex items-center w-full mr-3 hover:border-transparent hover:bg-gray-100"
				onClick={() => setShowModal(true)}
			>
				<svg
					viewBox="0 0 512 512"
					fill="currentColor"
					height="1.7em"
					width="1.7em"
					className="mr-3"
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
				<h2 className="text-md font-normal">Buat</h2>
			</button>
			{/* <h2 className="text-md font-normal ml-3">Buat</h2> */}
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">Modal Title</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-slate-500 text-lg leading-relaxed">
										I always felt like I could do anything. That’s the main
										thing people are controlled by! Thoughts- their perception
										of themselves! They're slowed down by their perception of
										themselves. If you're taught you can’t do anything, you
										won’t do anything. I was taught I could do everything.
									</p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};
