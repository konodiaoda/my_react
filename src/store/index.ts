import {ObservableTodoStore} from "@/views/todolist/features/ObservableTodoStore";
import React, {useContext} from "react";
import {configure} from "mobx";

configure({
	enforceActions: "observed",
})

class RootStore{
	 public observableTodoStore: ObservableTodoStore;

	constructor() {
		this.observableTodoStore = new ObservableTodoStore();
	}
}

const store = new RootStore();
export const useStore = () => useContext(React.createContext(store));