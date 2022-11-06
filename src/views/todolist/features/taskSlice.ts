import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {ITask, TaskSate} from "@/views/todolist/interface/Task";

const initialState: TaskSate = {
	tasks: [{id:nanoid(),content: "Wash the dishes", isDone: false}, {id:nanoid(),content: "Pet my dog", isDone: true}]
}

const todoSlice = createSlice({
	name:'TaskSate',
	initialState,
	reducers:{
		createNewTask: (state,action: PayloadAction<ITask[]>) => {
			state.tasks = action.payload;
		},
		deleteTask: (state,action: PayloadAction<string>) => {
			state.tasks = state.tasks?.filter((task: ITask) => task.id !== action.payload);
		}

	}
})

export const {createNewTask} = todoSlice.actions;
export default todoSlice.reducer;