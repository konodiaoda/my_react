import React from "react";
import todoLogo from "../assets/todoLogo.svg";
import { ToDoHeader } from "../styles/HeaderStyles";

const Header = () => {
    return (
        <ToDoHeader>
            <img src={todoLogo} alt="WebSite Logo" />
        </ToDoHeader>
    );
};

export default Header;
