import { ITask } from "@/views/todolist/interface/Task";
import {
    EmptyListDIV,
    ListContentDIV,
    ListContentHeader,
    ListDoneTaskCounter,
    ListItemsContainer
} from "@/views/todolist/styles/ListContentStyles";
import { ListItem } from "@/views/todolist/components/ListItem";
import { useStore } from "@/store";
import { observer } from "mobx-react";

const ListContent = observer(() => {
    const { observableTodoStore } = useStore();
    const taskLists = observableTodoStore.initialState;
    const createdTasksCount = taskLists.tasks.length;
    const doneTasksCount = taskLists.tasks.filter((task: ITask) => task.isDone).length;
    return (
        <ListContentDIV>
            <ListContentHeader>
                Created Tasks
                <span>{createdTasksCount}</span>
                <ListDoneTaskCounter>
                    <span>
                        {doneTasksCount} of {createdTasksCount}
                    </span>
                </ListDoneTaskCounter>
            </ListContentHeader>
            {taskLists.tasks.length === 0 ? (
                <EmptyListDIV>
                    <strong>You don&apos;t have any tasks registered yet.</strong>
                    <p>Create tasks and organize your to-do items</p>
                </EmptyListDIV>
            ) : (
                <ListItemsContainer>
                    {taskLists.tasks.map(({ content, id, isDone }: ITask) => (
                        <ListItem key={`${id}-${content}`} taskId={id} content={content} isDone={isDone}></ListItem>
                    ))}
                </ListItemsContainer>
            )}
        </ListContentDIV>
    );
});
export default ListContent;
