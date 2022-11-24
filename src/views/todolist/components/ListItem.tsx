import {IListItemProps} from "@/views/todolist/interface/Task";
import {ListItemDeleteButton, ListItemDIV, ListItemToggle, TodoContent} from "@/views/todolist/styles/ListItemStyles";
import {useStore} from "@/store";

export const ListItem = ({ taskId, content, isDone }: IListItemProps) => {
    const {observableTodoStore} = useStore()
    const handleDeleteTask = () => {
        observableTodoStore.deleteTask(taskId);
    };

    const handleSelectTask = () => {
        observableTodoStore.selectTask(taskId)
    };

    return (
        <ListItemDIV>
            <ListItemToggle  onClick={handleSelectTask} $isDone={isDone}>
            </ListItemToggle>
            <TodoContent $isDone={isDone}>
                {content}
            </TodoContent>
            <ListItemDeleteButton onClick={handleDeleteTask}>

            </ListItemDeleteButton>
        </ListItemDIV>
    );
};