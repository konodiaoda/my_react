export interface ITask {
	id?:string
	content?: string;
	isDone: boolean;
}
export interface TaskSate{
	tasks?: ITask[];
}
export interface IListItemProps {
	content?: string;
	taskId?: string;
	isDone?: boolean;
}