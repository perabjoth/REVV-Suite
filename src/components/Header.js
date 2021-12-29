import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import REVVlogo from '../img/REVV_logo.gif';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import FlagIcon from '@material-ui/icons/Flag';
import Home from '@material-ui/icons/Home';



function HomeLink() {
    return <NavLink className="navLink" to="/">
        <Home style={{ marginTop: "4px" }} />
        <Typography variant="h5" noWrap component="div"  >
            Home
        </Typography>
    </NavLink>
}

function LeaderboardLink() {
    return <NavLink  className="navLink" to="/Leaderboard"  >
        <FormatListNumberedIcon style={{ marginTop: "4px" }} />
        <Typography variant="h5" noWrap component="div"  >
            Leaderboard
        </Typography>
    </NavLink>
}

function RewardLink() {
    return <NavLink className="navLink" to="/Rewards">
        <AccountBalanceWalletIcon style={{ marginTop: "4px" }} />
        <Typography variant="h5" noWrap component="div"  >
            Rewards
        </Typography>
    </NavLink>
}

function TrackLink() {
    return <NavLink className="navLink" to="/Tracks">
        <FlagIcon style={{ marginTop: "4px" }} />
        <Typography variant="h5" noWrap component="div"  >
            Tracks
        </Typography>
    </NavLink>
}
function GasLink() {
    return <NavLink className="navLink" to="/Gas">
        <LocalGasStationIcon style={{ marginTop: "4px" }} />
        <Typography variant="h5" noWrap component="div"  >
            Gas Tracker
        </Typography>
    </NavLink>
}

function FreeLink() {
    return <NavLink className="navLink" to="/Free">
        <DirectionsCarIcon style={{ marginTop: "4px" }} />
        <Typography variant="h5" noWrap component="div"  >
            Free Cars
        </Typography>
    </NavLink>
}

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" href="/REVV-Suite/">
                    <Avatar src={REVVlogo} />
                </IconButton>
                <Typography variant="h5" noWrap component="div" className={"revvtitle"} style={{
                    flexGrow: "10",
                    cursor: "pointer",
                }}>
                    REVV Suite (Unofficial)
                </Typography>
                {!isMobile && <div className="navWrapper">
                    <HomeLink />
                    <LeaderboardLink />
                    <RewardLink />
                    <TrackLink/>
                    <GasLink/>
                    <FreeLink/>
                </div>}
                {isMobile && <div> 
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} ><HomeLink /></MenuItem>
                        <MenuItem onClick={handleClose}><LeaderboardLink /></MenuItem>
                        <MenuItem onClick={handleClose}><RewardLink /></MenuItem>
                        <MenuItem onClick={handleClose}><TrackLink/></MenuItem>
                        <MenuItem onClick={handleClose}><GasLink/></MenuItem>
                        <MenuItem onClick={handleClose}><FreeLink/></MenuItem>
                    </Menu>
                </div>
                }
            </Toolbar>
        </AppBar>
    )
}
