import React, { FormEvent, useState } from "react";
import { ITask } from "@/views/todolist/interface/Task";
import ListContent from "@/views/todolist/components/ListContent";
import { ListButtonNewTask, ListDIV, ListHeader, ListInputNewTask } from "@/views/todolist/styles/ListStyles";
import { nanoid } from "nanoid";
import { observer } from "mobx-react";
import { useStore } from "@/store";

const List = observer(() => {
    const { observableTodoStore } = useStore();
    const [newTaskText, setNewTaskText] = useState<string>("");

    const handleCreateNewTask = (event: FormEvent) => {
        event.preventDefault();
        const newTask: ITask = {
            id: nanoid(),
            content: newTaskText,
            isDone: false
        };
        observableTodoStore.createNewTask(newTask);
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
});

export default List;
