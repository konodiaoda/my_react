import {useAppSelector} from "@/store";
import {ITask} from "@/views/todolist/interface/Task";
import {shallowEqual} from "react-redux";


const ListContent =()=>{
	const {taskLists} = useAppSelector((state) => state.TaskSate,shallowEqual);
	const createdTasksCount = taskLists.length;
	const doneTasksCount = taskLists.filter(
		(task: ITask) => task.isDone
	).length;
	return(
		<div>

		</div>
	)

}
export default ListContent;