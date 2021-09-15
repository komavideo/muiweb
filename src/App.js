import Home from "./pages/Home";

import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[700],
        },
        secondary: {
            main: pink[500],
        },
    },
    typography: {
        fontFamily: 'メイリオ',
    }
});

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Home></Home>
            </ThemeProvider>
        </div>
    );
}

export default App;
