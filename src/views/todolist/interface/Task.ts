export interface ITask {
	id?:string
	content?: string;
	isDone: boolean;
}
export interface TaskSate{
	tasks?: ITask[];
}