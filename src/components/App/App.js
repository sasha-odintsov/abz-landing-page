import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../Header/Header';
import Heading from '../Heading/Heading';
import Section from '../Section/Section';
import Form from '../Form/Form';

const theme = createTheme({
  typography: {
    fontFamily: ['"Nunito"', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      main: "#00BDD3"
    },
    error: {
      main: "#CB3D40"
    }
  },
  "& label.Mui-focused": {
    color: "primary"
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "primary"
    },
  },
  "& .Mui-error": {
    color: "error"
  },
  "& .MuiFormHelperText-root": {
    color: "error"
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Heading />
        <Section />
        <Form />
      </ThemeProvider>
    </>
  );
}

export default App;