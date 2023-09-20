import { Sidebar } from "./Sidebar";
export const Layout = ({ children }: any) => {
	return (
		<div className="flex">
			{/* Left Sidebar */}
			<Sidebar />

			{/* Divider  */}
			<div className="h-screen bg-gray-200 w-px" />

			{/* Right Content */}
			<div className="overflow-y-scroll w-full h-screen 5/7">
				{/* Content area */}
				{children}
			</div>
		</div>
	);
};
