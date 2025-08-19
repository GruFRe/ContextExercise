import { use } from "react";
import { MyFirstContext } from "../App";

export const GrandChildComponent = () => {
	const contextVars = use(MyFirstContext);
	return (
		<>
			<h1>Grand Child Component</h1>
			<p>{contextVars}</p>
		</>
	);
};
