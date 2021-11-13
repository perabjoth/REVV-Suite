import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { lazy, Suspense } from "react";
import theme from './components/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/system/Box';
import Tip from './components/Tip';
import REVVPrice from './components/REVVPrice';
import Header from './components/Header';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
const Home = lazy(() => import('./components/Home'));
const Leaderboard = lazy(() => import('./components/Leaderboard'));
const Transactions = lazy(() => import('./components/Transactions'));



function App() {
  return (
    <Suspense fallback={<Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>} >
      <Router>
        <ThemeProvider theme={theme()}>
          <CssBaseline />
          <Box className="mainDiv">
            <Header />
            <Container component="main" className="container">
              <Grid container spacing={3} >
                <Grid item md={6} xs={12}>
                  <REVVPrice />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Tip />
                </Grid>
              </Grid>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
              <Routes>
                <Route path="/Leaderboard" element={<Leaderboard />} />
              </Routes>
              <Routes>
                <Route path="/Rewards" element={<Transactions />} />
              </Routes>
            </Container>
          </Box>
        </ThemeProvider>
      </Router>
    </Suspense>
  );
}

export default App;
