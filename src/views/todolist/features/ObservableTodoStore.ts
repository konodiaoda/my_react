import { ITask, TaskSate } from "@/views/todolist/interface/Task";
import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";
import { isHydrated, makePersistable } from "mobx-persist-store";

class ObservableTodoStore {
    initialState: TaskSate = {
        tasks: [
            { id: nanoid(), content: "Wash the dishes", isDone: false },
            { id: nanoid(), content: "Pet my dog", isDone: true }
        ]
    };
    constructor() {
        makeAutoObservable(this, { sortByIsDone: false }, { autoBind: true });
        makePersistable(this, {
            name: "ObservableTodoStore",
            properties: ["initialState"],
            storage: window.localStorage
        }).then(() => {});
    }

    get isHydrated(): boolean {
        return isHydrated(this);
    }

    sortByIsDone = (newTasksArray: ITask[]) => {
        return newTasksArray
            .map(task => ({ raw: task, length: task.content.length }))
            .sort((a, b) => a.length - b.length)
            .map(task => task.raw);
    };
    createNewTask = (task: ITask) => {
        const newTasksArray = [...this.initialState.tasks, task];
        this.initialState.tasks = this.sortByIsDone(newTasksArray);
    };

    deleteTask = (taskId: string) => {
        this.initialState.tasks = this.initialState.tasks.filter(task => (task.id! = taskId));
    };

    selectTask = (taskId: string) => {
        const newTasksArray = this.initialState.tasks.map((task: ITask) => {
            if (task.id === taskId) task.isDone = !task.isDone;
            return task;
        });
        this.initialState.tasks = this.sortByIsDone(newTasksArray);
    };
}

export { ObservableTodoStore };
