import { Sidebar } from "./Sidebar";
export const Layout = ({ children }: any) => {
	return (
		<div className="flex">
			{/* Left Sidebar */}
			<Sidebar />

			{/* Divider  */}
			<div className="h-screen bg-gray-200 w-px" />

			{/* Right Content */}
			<div className="overflow-y-scroll h-screen mx-10 ">
				{/* Content area */}
				{children}
			</div>
		</div>
	);
};
