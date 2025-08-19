import { MyFirstContext } from "./MyFirstContext";

export const FirstState = ({ children }) => {
	const contextVar = "Some random string to test";
	return <MyFirstContext value={contextVar}>{children}</MyFirstContext>;
};
