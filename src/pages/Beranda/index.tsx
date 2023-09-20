import { Content } from "./Content";
import { data } from "./data.json";

export const Beranda = () => {
	return (
		<div className="h-screen p-6">
			{data.map((item, index) => (
				<div key={index}>
					<Content data={item} customKey={index} />
				</div>
			))}
		</div>
	);
};
