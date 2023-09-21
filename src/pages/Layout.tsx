import { Divider } from "./Divider";
import { Sidebar } from "./Sidebar";
export const Layout = ({ children }: any) => {
	return (
		<div className="flex w-screen">
			<Sidebar />
			<Divider />
			<div className="overflow-y-scroll w-full h-screen">{children}</div>
		</div>
	);
};
