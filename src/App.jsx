import { ParentComponent } from "./components/ParentComponent";
import { MyFirstContext, useMyFirstContext } from "./context/MyFirstContext";
import { FirstState } from "./context/FirstState";

const App = () => {
	// const test = "test string for context";
	return (
		<>
			<h1>Context API</h1>
			<FirstState>
				<ParentComponent />
			</FirstState>
		</>
	);
};

export default App;
