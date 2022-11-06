import { CssBaseline, StyledEngineProvider } from "@mui/material";
import Todolist from "@/views/todolist";

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Todolist/>
        </StyledEngineProvider>
    );
}

export default App;
