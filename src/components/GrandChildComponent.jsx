import { useMyFirstContext } from "../context/MyFirstContext";

export const GrandChildComponent = () => {
	const contextVars = useMyFirstContext();
	return (
		<>
			<h1>Grand Child Component</h1>
			<p>{contextVars}</p>
		</>
	);
};
