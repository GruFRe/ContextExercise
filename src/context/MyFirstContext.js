import { createContext, use } from "react";

export const MyFirstContext = createContext();

export const useMyFirstContext = () => {
	const context = use(MyFirstContext);
	return context;
};
