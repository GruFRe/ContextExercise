import { GrandChildComponent } from "./GrandChildComponent";

export const ChildComponent = () => {
	return (
		<>
			<h1>Child Component</h1>
			<GrandChildComponent />
		</>
	);
};
