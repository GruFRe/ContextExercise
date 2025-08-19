import { createContext, use } from "react";

export const MyFirstContext = createContext();

export const useMyFirstContext = () => {
	const context = use(MyFirstContext);

	if (!context) {
		throw new Error(`Error from MyFirstContext`);
	}
	return context;
};
