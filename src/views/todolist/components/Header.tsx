import React from "react";
import todoLogo from "../assets/todoLogo.svg";
import {header} from "../styles/Header"

const Header = () => {
	return (
		<header className={header}>
			<img src={todoLogo} alt="WebSite Logo" />
		</header>
	);
}

export default Header;