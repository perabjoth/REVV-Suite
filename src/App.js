import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar, Box, Button } from '@mui/material';
import REVVlogo from './img/REVV_logo.png';
import Donate from './components/Donate';
import REVVPrice from './components/REVVPrice';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Opensea from './components/Opensea';
import YoutubeSearch from './components/YoutubeSearch'

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  }
});

function appBarLabel(label, detail) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <Avatar src={REVVlogo} className="App-logo" />
      </IconButton>
      <Typography variant="h5" noWrap component="div" className="revvtitle">
        {label} ({detail})
      </Typography>
    </Toolbar>
  );
}

function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box className="mainDiv">
          <AppBar position="static" color="primary">
            {appBarLabel('REVV Suite', 'Unofficial')}
          </AppBar>
          <Container component="main" className="container">
            <Grid container spacing={3} >
              <Grid item md={6} xs={12}>
                <REVVPrice />
              </Grid>
              <Grid item md={6} xs={12}>
                <Donate />
              </Grid>
            </Grid>
            <Grid container spacing={3} >
              <Grid item md={6} xs={12}>
                <a target="_blank" rel="noreferrer" href="https://perabjoth.github.io/REVV-Leaderboard">
                  <Button color="primary" fullWidth variant="contained" startIcon={<FormatListNumberedIcon />}> Check Leaderboard Prizes</Button>
                </a>
              </Grid>
              <Grid item md={6} xs={12}>
                <a target="_blank" rel="noreferrer" href="https://perabjoth.github.io/REVV-Rewards">
                  <Button color="primary" fullWidth variant="contained" startIcon={<AccountBalanceWalletIcon />}>Check Rewards Received</Button>
                </a>
              </Grid>
            </Grid>
            <br/>
            <Opensea/>
            <br/>
            <YoutubeSearch/>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
