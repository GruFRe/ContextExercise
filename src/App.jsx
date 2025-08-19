import { ParentComponent } from "./components/ParentComponent";
import { createContext } from "react";

export const MyFirstContext = createContext();

const App = () => {
	const test = "test string for context";
	return (
		<>
			<h1>Context API</h1>
			<MyFirstContext value={test}>
				<ParentComponent />
			</MyFirstContext>
		</>
	);
};

export default App;
