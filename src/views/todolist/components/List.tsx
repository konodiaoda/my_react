import React, { FormEvent, useState } from "react";
import { createNewTask } from "@/views/todolist/features/taskSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { ITask } from "@/views/todolist/interface/Task";
import { nanoid } from "@reduxjs/toolkit";
import ListContent from "@/views/todolist/components/ListContent";
import {ListButtonNewTask, ListDIV, ListHeader, ListInputNewTask} from "@/views/todolist/styles/ListStyles";
import {shallowEqual} from "react-redux";

export const sortByIsDone = (newTasksArray: ITask[]) => {
    return newTasksArray.sort((a) => {
        if (!a.isDone) return -1;
        if (a.isDone) return 1;
        return 0;
    });
};

const List = () => {
    const taskLists  = useAppSelector(state => state.taskSate,shallowEqual);
    const [newTaskText, setNewTaskText] = useState<string>("");
    const dispatch = useAppDispatch();

    const handleCreateNewTask = (event: FormEvent) => {
        event.preventDefault();
        const newTask: ITask = {
            id: nanoid(),
            content: newTaskText,
            isDone: false
        };
        const newTasksArray = [...(taskLists.tasks), newTask];
        const sortedTasks = sortByIsDone(newTasksArray);
        dispatch(createNewTask(sortedTasks));
        setNewTaskText("");
    };

    const handleNewCommentInvalid = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.setCustomValidity("This field is mandatory");
    };

    const handleTypeNewTaskText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value);
    };

    return (
        <ListDIV>
            <ListHeader>
                <form onSubmit={handleCreateNewTask}>
                    <ListInputNewTask
                        placeholder="Add a new Task"
                        type="text"
                        id="newTask"
                        value={newTaskText}
                        required
                        onInvalid={handleNewCommentInvalid}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTypeNewTaskText(e)}
                    />
                </form>
                <ListButtonNewTask type="submit">Create</ListButtonNewTask>
            </ListHeader>
            <ListContent />
        </ListDIV>
    );
};

export default List;
