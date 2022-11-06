import React, {FormEvent, useState} from "react";
import {createNewTask} from "@/views/todolist/features/taskSlice";
import {useAppDispatch, useAppSelector} from "@/store";
import {ITask} from "@/views/todolist/interface/Task";
import {nanoid} from "@reduxjs/toolkit";
import ListContent from "@/views/todolist/components/ListContent";
import {list, listButtonNewTask, listHeader, listInputNewTask} from "@/views/todolist/styles/List";



const sortByIsDone = (newTasksArray: ITask[]) => {
	return newTasksArray.sort((a, b) => {
		if (!a.isDone) return -1;
		if (a.isDone) return 1;
		return 0;
	});
}

const List = () =>{
	const {taskLists} = useAppSelector((state) => state.TaskSate);
	const [newTaskText, setNewTaskText] = useState<string>("");
	const dispatch = useAppDispatch();

	const handleCreateNewTask = (event: FormEvent)=>{
		event.preventDefault();
		const newTask:ITask = {
			id:nanoid(),
			content: newTaskText,
			isDone: false,
		};
		const newTasksArray = [...taskLists??[], newTask];
		const sortedTasks = sortByIsDone(newTasksArray);
		dispatch(createNewTask(sortedTasks))
		setNewTaskText("");
	}

	const handleNewCommentInvalid = (event: React.ChangeEvent<HTMLInputElement>) =>{
		event.target.setCustomValidity("This field is mandatory");
	}

	const handleTypeNewTaskText = (event: React.ChangeEvent<HTMLInputElement>) =>{
		setNewTaskText(event.target.value);
	}

	return(
		<div className={list}>
			<header className={listHeader}>
				<form onSubmit={handleCreateNewTask}>
					<input
						placeholder="Add a new Task"
						type="text"
						id="newTask"
						value={newTaskText}
						required
						onInvalid={handleNewCommentInvalid}
						onChange={(e) => handleTypeNewTaskText(e)}
						className={listInputNewTask}
					/>
				</form>
				<button type="submit" className={listButtonNewTask}>
					Create
				</button>
			</header>
			<ListContent/>
		</div>
	)
}


export default List;