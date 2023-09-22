import { Link } from "react-router-dom";

export const SignUp = () => {
	return (
		<div className="w-screen flex flex-col justify-center items-center text-center">
			<div className="w-full max-w-xs  border border-gray-300 border-solid rounded px-8 pt-6 pb-8 mb-4">
				<h1 className="font-sans text-3xl font-bold mb-5">LelangID</h1>
				<p className="font-sans mb-5 font-semibold text-gray-500">
					Lelang Barang anda, dan dapatkan penawaran terbaik
				</p>
				<form className="">
					<div className="mb-4">
						<input
							className="text-sm shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="phoneNumber"
							type="text"
							placeholder="Nomor Ponsel"
						/>
					</div>
					<div className="mb-4">
						<input
							className="text-sm shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="fullName"
							type="text"
							placeholder="Nama Lengkap"
						/>
					</div>
					<div className="mb-4">
						<input
							className="text-sm shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Nama Pengguna"
						/>
					</div>
					<div className="mb-6">
						<input
							className="text-sm shadow appearance-none border border-red-500 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="******************"
						/>
						{/* <p className="text-red-500 text-xs italic">
							Please choose a password.
						</p> */}
					</div>
					<div className="">
						<Link to="/sign-in">
							<button
								className="text-sm w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="button"
							>
								Daftar
							</button>
						</Link>
					</div>
				</form>
			</div>
			<div className="w-full max-w-xs bg-white border border-gray-300 border-solid rounded px-8 pt-6 pb-6 flex justify-center">
				<p className="font-sans mr-2 text-sm font-medium">Punya akun ?</p>

				<Link to="/sign-in">
					<p className="text-blue-500 text-sm font-medium">Masuk</p>
				</Link>
			</div>
		</div>
	);
};
