import { ParentComponent } from "./components/ParentComponent";
import { MyFirstContext, useMyFirstContext } from "./context/MyFirstContext";

const App = () => {
	// const test = "test string for context";
	return (
		<>
			<h1>Context API</h1>
			<MyFirstContext value={context}>
				<ParentComponent />
			</MyFirstContext>
		</>
	);
};

export default App;
