import { useMyFirstContext } from "../context/MyFirstContext";

export const GrandChildComponent = () => {
	const contextVar = useMyFirstContext();
	return (
		<>
			<h1>Grand Child Component</h1>
			<p>{contextVar}</p>
		</>
	);
};
