import {IListItemProps, ITask} from "@/views/todolist/interface/Task";
import {ListItemDIV, ListItemToggle} from "@/views/todolist/styles/ListItemStyles";
import {useAppDispatch, useAppSelector} from "@/store";
import {shallowEqual} from "react-redux";
import {sortByIsDone} from "@/views/todolist/components/List";
import {deleteTask, selectTask} from "@/views/todolist/features/taskSlice";

export const ListItem = ({ taskId, content, isDone }: IListItemProps) => {
    const taskLists = useAppSelector(state => state.taskSate, shallowEqual);
    const dispatch = useAppDispatch();
    const handleDeleteTask = () => {
        dispatch(deleteTask(taskId)) ;
    };

    const handleSelectTask = () => {
        const newTasksArray = taskLists.tasks.map((task: ITask) => {
            if (task.id === taskId) task.isDone = !task.isDone;
            return task;
        });
        dispatch(selectTask(sortByIsDone(newTasksArray))) ;
    };

    return (
        <ListItemDIV>
            <ListItemToggle onClick={handleSelectTask}>
                {isDone ? "111" : null}
            </ListItemToggle>
        </ListItemDIV>
    );
};