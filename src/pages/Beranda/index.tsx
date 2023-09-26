import { Content } from "./Content";
import { data } from "./data.json";

export const Beranda = () => {
	return (
		<div className="h-screen p-6">
			<div className="grid grid-cols-3 gap-6">
				{data.map((item, index) => (
					<div key={index}>
						<Content data={item} />
					</div>
				))}
			</div>
		</div>
	);
};
