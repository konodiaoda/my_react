import {useAppSelector} from "@/store";
import {ITask} from "@/views/todolist/interface/Task";
import {shallowEqual} from "react-redux";
import {
	emptyList,
	ListContentDIV,
	listContentHeader,
	listDoneTaskCounter,
	listItemsContainer
} from "@/views/todolist/styles/ListContent";
import ListItem from "@/views/todolist/components/ListItem";


const ListContent =()=>{
	const {taskLists} = useAppSelector((state) => state.TaskSate,shallowEqual);
	const createdTasksCount = taskLists.length;
	const doneTasksCount = taskLists.filter(
		(task: ITask) => task.isDone
	).length;
	return(
		<ListContentDIV>
			<header className={listContentHeader}>
				Created Tasks
				<span>{createdTasksCount}</span>
				<div className={listDoneTaskCounter}>
				<span>{doneTasksCount} of {createdTasksCount}</span>
				</div>
			</header>
			{taskLists.length === 0 ? (
				<div className={emptyList}>
					<strong>You don't have any tasks registered yet.</strong>
					<p>Create tasks and organize your to-do items</p>
				</div>
			) : (
				<main className={listItemsContainer}>
					{taskLists.map(({ content, id, isDone }: ITask) => (
						<ListItem
							key={`${id}-${content}`}
							taskId={id}
							content={content}
							isDone={isDone}
						></ListItem>
					))}
				</main>
			)}
		</ListContentDIV>
	)

}
export default ListContent;