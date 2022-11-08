import Header from "../todolist/components/Header";
import List from "@/views/todolist/components/List";
import { ToDoListContent, WrapperDIV } from "@/views/todolist/styles/TodoListStyles";

const Todolist = () => {
    return (
        <WrapperDIV>
            <Header />
            <ToDoListContent>
                <List />
            </ToDoListContent>
        </WrapperDIV>
    );
};

export default Todolist;
