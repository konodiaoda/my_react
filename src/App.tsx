import {CssBaseline} from "@mui/material";
import NavigationScroll from "@/layout/NavigationScroll";
import {Routes} from "react-router-dom";

function App() {
    return (
        <>
            <CssBaseline/>
            <NavigationScroll>
                <Routes/>
            </NavigationScroll>
        </>
    );
}

export default App;
