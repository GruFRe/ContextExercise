import { useMyFirstContext } from "../context/MyFirstContext";

export const GrandChildComponent = () => {
	const context = useMyFirstContext();
	return (
		<>
			<h1>Grand Child Component</h1>
			<p>{context}</p>
		</>
	);
};
