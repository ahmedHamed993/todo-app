import Appbar from "./components/Appbar";
import AddForm from "./components/AddForm";
import Heading from "./components/Heading";
import TodosList from "./components/TodosList";
import { Box, Container } from "@material-ui/core";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import  {CssBaseline}  from "@mui/material";
import {useSelector} from "react-redux";


function App() {
  const {darkModeOn} = useSelector(state => state.modeReducer);
  const theme = createTheme({
    palette: {
      mode: darkModeOn === true? "dark":"light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{width:'100%',height:'100%'}} >
        <Appbar />
        <Container className="App" maxWidth="md">
          <Heading />
          <AddForm />
          <TodosList />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
