import { PersonMessage } from "./PersonMessage";
import { ListMessage } from "./ListMessage";
import { NewMessage } from "./NewMessage";

import { data } from "./data.json";

export const Message = () => {
	return (
		<div className="flex flex-row">
			<ListMessage data={data} />
			{/* <NewMessage /> */}
			<PersonMessage />
		</div>
	);
};
