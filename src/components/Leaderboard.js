import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MaterialTable from '@material-table/core';
import { forwardRef } from 'react';
import events from '../data/events.json';
import Popup from 'reactjs-popup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import theme from './theme';
import CloseIcon from '@material-ui/icons/Close';


import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const sessionContext = require.context('../data/sessionData', true, /.json$/);
const allSessions = {};
sessionContext.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    const resource = require(`../data/sessionData/${fileName}`);
    const namespace = fileName.replace('.json', '');
    allSessions[namespace] = JSON.parse(JSON.stringify(resource));

});

const leaderboardContext = require.context('../data/leaderboardData', true, /.json$/);
const allleaderboards = {};
leaderboardContext.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    const resource = require(`../data/leaderboardData/${fileName}`);
    const namespace = fileName.replace('.json', '');
    allleaderboards[namespace] = JSON.parse(JSON.stringify(resource));

});

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function generatePrizeTable(prizeData, prizeDistribution, splitLeaderboard, totalPrizeString, dynamicPrizePoolRatio) {
    let prizeTable = <div></div>
    let unit = "$"
    if (totalPrizeString.toUpperCase().includes("REVV")) {
        unit = "REVV"
    }
    let prizeTotal = totalPrizeString.replace(/\D/g, '');   

    if (prizeData && prizeData.total > 0) {
        let totalDrivers = prizeData.total
        let hiredDrivers = prizeData.hired
        let ownerDrivers = prizeData.owner
        let ownerPercentage = (ownerDrivers / totalDrivers)
        let hiredPercentage = (hiredDrivers / totalDrivers)
        let halfSplit = false
        if (!dynamicPrizePoolRatio) {
            ownerPercentage = 0.5
            hiredPercentage = 0.5
            halfSplit = true
        }

        let rankRange = false
        for (const i in prizeDistribution) {
            prizeDistribution[i].unit = unit
            let peoplePerPrize = 1
            if (prizeDistribution[i].prize < 1 || halfSplit) {
                if (i < prizeDistribution.length - 1) {
                    let j = parseInt(i) + 1
                    if (prizeDistribution[j].rank - prizeDistribution[i].rank > 1) {
                        rankRange = true
                        prizeDistribution[i].rankString = prizeDistribution[i].rank.toString() + ' - ' + (prizeDistribution[j].rank - 1).toString()
                        peoplePerPrize = parseInt(prizeDistribution[j].rank) - parseInt(prizeDistribution[i].rank)
                    }
                } else {
                    if (rankRange) {
                        prizeDistribution[i].rankString = prizeDistribution[i].rank.toString() + '+*'
                        peoplePerPrize = 3000
                    }
                }

                if (!prizeDistribution[i].rankString) {
                    prizeDistribution[i].rankString = prizeDistribution[i].rank.toString()
                }

                let currentPrize = prizeDistribution[i].prize * (halfSplit ? 1 : prizeTotal)
                prizeDistribution[i].hiredPrize = ((halfSplit ? 1 : hiredPercentage) * currentPrize / peoplePerPrize).toFixed(2)
                prizeDistribution[i].ownerPrize = ((halfSplit ? 1 : ownerPercentage) * currentPrize / peoplePerPrize).toFixed(2)

            }
        }

        prizeTable = <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Driver Prize {splitLeaderboard && '(' + (ownerPercentage * 100).toFixed(2) + '%)'}</TableCell>
                    {splitLeaderboard && <TableCell>Hired Prize ({(hiredPercentage * 100).toFixed(2)}%)</TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    prizeDistribution.map((prizeRow) => (

                        <TableRow>
                            <TableCell>
                                {prizeRow.rankString ? prizeRow.rankString : prizeRow.rank}
                            </TableCell>
                            <TableCell>
                                {splitLeaderboard ? prizeRow.ownerPrize : prizeRow.prize} {unit}
                            </TableCell>
                            {splitLeaderboard && <TableCell>
                                {prizeRow.hiredPrize} {unit}
                            </TableCell>}
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    } else {
        prizeTable = <Card sx={{ minWidth: 275 }}>
            <CardContent align="center">
                <h1>Prize Data Not Available</h1>
            </CardContent>
        </Card>
    }

    return prizeTable
}

class Prizes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prizeTable: <LinearProgress />,
            prizeData: undefined,
        };
    }

    setPrizeData(value) {
        this.setState({
            prizeData: value
        });

        this.generatePrizeTableContent(value,
            this.props.eventData.data.prize,
            this.props.eventData.data.splitLeaderboard,
            this.props.eventData.data.prize_total.toString(),
            this.props.eventData.data.dynamicPrizePoolRatio)
    }

    generatePrizeTableContent(prizeData, prizeDistribution, splitLeaderboard, totalPrizeString, dynamicPrizePoolRatio) {
        this.setPrizeTable(generatePrizeTable(prizeData, prizeDistribution, splitLeaderboard, totalPrizeString, dynamicPrizePoolRatio))
    }

    setPrizeTable(value) {
        this.setState({
            prizeTable: value
        })
    }

    getPrizeData = async () => {
        let prizeData;
        let sessionID = this.props.eventData.id.toUpperCase();
        prizeData = allSessions[sessionID]
        this.setPrizeData(prizeData);
    }

    componentDidMount() {
        this.getPrizeData()
    }

    render() {
        return <div>{this.state.prizeTable}</div>
    }
}

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const columns = [
    { title: "Series", field: "data.series", hidden: true },
    { title: "Name", field: "data.name", filterPlaceholder: 'Filter Name' },
    {
        title: "View Pizes", field: "", render: rowData => {
            if (rowData.walletPrize) {
                return <div>{rowData.walletPrize}</div>
            } else if (new Date(rowData.endTimestamp).getTime() < new Date().getTime()) {
                return <Popup trigger={<a>View Prizes</a>} position="bottom center" closeOnDocumentClick={false} modal closeOnEscape >
                    {close => {
                        return (
                            <Dialog open onClose={close}>
                                <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
                                    Prize Distribution
                                </BootstrapDialogTitle>
                                <Prizes eventData={rowData} />
                            </Dialog>
                        )
                    }
                    }
                </Popup>
            } else {
                return <div>{new Date(rowData.startTimestamp).getTime() < new Date().getTime() ? 'In Progress' : 'Upcoming'}...</div>
            }
        }
    },
    { title: "Start", field: "startTimestamp", type: "date", filterPlaceholder: 'Filter Start' },
    { title: "End", field: "endTimestamp", type: "date", filterPlaceholder: 'Filter End' },
    { title: "Track", field: "data.track", filterPlaceholder: 'Filter Track' },
    { title: "Laps", field: "data.lapCount", filterPlaceholder: 'Filter Laps' },
    { title: "Weather", field: "data.weather", filterPlaceholder: 'Filter Weather' },
    { title: "Total Prize", field: "data.prize_total_formatted", filterPlaceholder: 'Filter Prize' },
    { title: "id", field: "id", hidden: true },
    { title: "percentagePrizePool", field: "data.percentagePrizePool", hidden: true },
    { title: "dynamicPrizePoolRatio", field: "data.dynamicPrizePoolRatio", hidden: true },
    { title: "splitLeaderboard", field: "data.splitLeaderboard", hidden: true },
];


function formatEventData(eventData) {
    eventData.map(singleDataPoint => {
        singleDataPoint.startTimestamp = new Date(singleDataPoint.startTimestamp)
        singleDataPoint.endTimestamp = new Date(singleDataPoint.endTimestamp)
        if (singleDataPoint.data.prize_total.toString().includes("REVV")) {
            singleDataPoint.data.prize_total_formatted = singleDataPoint.data.prize_total
        } else {
            singleDataPoint.data.prize_total_formatted = singleDataPoint.data.prize_total.toString() + " $"
        }
        return singleDataPoint
    })

    eventData.sort(function (a, b) {
        return new Date(b.startTimestamp) - new Date(a.startTimestamp);
    });

    return eventData;
}


export default class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventData: undefined,
            eventDataLoaded: false,
            walletAddress: '',
            walletPositions: undefined,
        };
    }

    setEventData(eventData) {
        this.setState({ eventData: eventData })
    }

    setEventDataLoaded(value) {
        this.setState({ eventDataLoaded: value })
    }

    BasicTable = async () => {
        let eventData = events
        eventData = formatEventData(eventData);
        this.setEventData(eventData);
        this.setEventDataLoaded(true);
    };

    componentDidMount() {
        this.BasicTable();
    }

    setWalletAddress(value) {
        this.setState({ walletAddress: value })
    }

    filterWallet(entry) {
        return entry.wallet === this.walletAddress
    }

    getWalletEntry(currentLeaderboard, owner, hired, split, eventId) {
        let driverEntry = undefined
        if (currentLeaderboard) {
            driverEntry = currentLeaderboard.entries.filter((entry) => entry.wallet.toUpperCase() === this.state.walletAddress.toUpperCase())
            if (driverEntry.length > 0) {
                driverEntry = driverEntry[0]
                driverEntry.owner = owner
                driverEntry.hired = hired
                driverEntry.split = split
                return driverEntry
            }
        }

        return undefined
    }

    setWalletPosition(walletPositions) {
        this.setState({ walletPositions: walletPositions })
        let eventDeepCopy = JSON.parse(JSON.stringify(this.state.eventData));
        eventDeepCopy.forEach(event => {
            if (allSessions[event.id.toUpperCase()] && walletPositions[event.id]) {
                let currentWalletPosition = walletPositions[event.id]
                let currentRank = currentWalletPosition.rank
                generatePrizeTable(allSessions[event.id.toUpperCase()],
                    event.data.prize,
                    event.data.splitLeaderboard,
                    event.data.prize_total.toString(),
                    event.data.dynamicPrizePoolRatio)
                let prize = event.data.prize
                let walletPrize = undefined
                for (let index = 0; index < prize.length; index++) {
                    const prizeRank = prize[index];
                    const nextIndex = index + 1
                    if (nextIndex === prize.length) {
                        walletPrize = prizeRank
                        break;
                    } else if (currentRank >= prizeRank.rank && currentRank <= prize[nextIndex].rank) {
                        walletPrize = prizeRank
                        break;
                    }
                }

                event.walletPrize = undefined

                if (walletPrize) {
                    let finalPrize = ''
                    if (currentWalletPosition.split) {
                        finalPrize = currentWalletPosition.hired ? walletPrize.hiredPrize : walletPrize.ownerPrize
                    } else {
                        finalPrize = walletPrize.prize
                    }

                    event.walletPrize = "Rank: " + currentRank.toString() + " - Prize: " + finalPrize.toString() + " " + walletPrize.unit
                }
            }
        });
        this.setEventData(eventDeepCopy)
        this.setEventDataLoaded(true)
    }

    getWalletPositions() {
        this.setEventDataLoaded(false)
        let walletPositions = {};
        events.forEach(event => {
            let leaderboardPrefix = 'GAME_SESSION_ALPHA_A_'
            if (event.data.splitLeaderboard) {
                let ownerLeaderboard = leaderboardPrefix + event.id.toUpperCase() + '_SPLIT_OWNER'
                let hiredLeaderboard = leaderboardPrefix + event.id.toUpperCase() + '_SPLIT_HIRED'
                let ownerLeaderboardData = allleaderboards[ownerLeaderboard]
                let hiredLeaderboardData = allleaderboards[hiredLeaderboard]
                let ownerEntry = this.getWalletEntry(ownerLeaderboardData, true, false, true)
                let hiredEntry = this.getWalletEntry(hiredLeaderboardData, false, true, true)
                if (ownerEntry) {
                    walletPositions[event.id] = ownerEntry
                } else if (hiredEntry) {
                    walletPositions[event.id] = hiredEntry
                }
            } else {
                let leaderboard = leaderboardPrefix + event.id.toUpperCase()
                let ownerEntry = this.getWalletEntry(allleaderboards[leaderboard], true, false, false)
                if (ownerEntry) {
                    walletPositions[event.id] = ownerEntry
                }
            }
        });

        this.setWalletPosition(walletPositions)
    }

    render() {

        return (
            <Grid container spacing={3} >
                <Grid item md={12} xs={12}>
                    <TextField
                        id="wallet-address"
                        label="Wallet Address"
                        variant="outlined"
                        fullWidth
                        focused
                        placeholder="0x000..."
                        onChange={(e) => this.setWalletAddress(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} alignContent="center" alignItems="center">
                    <Button color="primary" fullWidth variant="contained" onClick={() => this.getWalletPositions()} >Get Wallet List</Button>
                </Grid>
                <Grid item xs={12}>
                    <MaterialTable
                        theme={theme()}
                        style={{ width: "100%", display: "grid" }}
                        title="REVV Leaderboards"
                        columns={columns}
                        data={this.state.eventData}
                        icons={tableIcons}
                        isLoading={!this.state.eventDataLoaded}
                        options={{
                            pageSize: 10,
                            pageSizeOptions: [5, 10, 20, { value: this.state.eventData ? parseInt(this.state.eventData.length) : 100, label: 'All' }],
                            filtering: true,
                            search: false,
                            // selection: true
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
}
