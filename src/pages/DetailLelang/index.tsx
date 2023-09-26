import { Content } from "./Content";
import { data } from "./data.json";

export const DetailLelang = () => {
	return (
		<div className="h-screen p-6">
			<Content data={data} />
		</div>
	);
};
