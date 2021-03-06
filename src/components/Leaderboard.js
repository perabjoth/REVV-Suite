import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import CoingeckoPrice from '../api/CoingeckoPrice';
import revvData from '../api/revvData';
import revvTransactions from '../api/revvTransactions'
import Popup from 'reactjs-popup';
import Alert from '@material-ui/lab/Alert';
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
import Checkbox from '@material-ui/core/Checkbox';
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

const leaderboardPrefix = 'GAME_SESSION_ALPHA_A_'
const ownerSuffix = '_SPLIT_OWNER'
const hiredSuffix = '_SPLIT_HIRED'
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

function getArrayValue(array, field, value) {
    let result = array.filter((item) => {
        return item[field] === value
    })
    if (result.length > 0) {
        return result[0]
    }
    return undefined
}

function generatePrizeTable(sessionData, participation, prizeDistribution, splitLeaderboard, totalPrizeString, dynamicPrizePoolRatio, percentagePrizePool) {
    let prizeTable = <div></div>
    let unit = "$"

    if (totalPrizeString.toUpperCase().includes("REVV")) {
        unit = "REVV"
    }
    let prizeTotal = totalPrizeString.replace(/\D/g, '');

    if (sessionData && sessionData.total > 0) {
        let totalDrivers = sessionData.total
        let hiredDrivers = sessionData.hired
        let ownerDrivers = sessionData.owner
        let ownerPercentage = (ownerDrivers / totalDrivers)
        let hiredPercentage = (hiredDrivers / totalDrivers)
        if (participation.owner) {
            ownerDrivers = participation.owner
            hiredDrivers = participation.hired
        } else {
            ownerDrivers = participation.total
        }

        let halfSplit = false
        let useOriginalPrize = false
        if (!dynamicPrizePoolRatio && splitLeaderboard) {
            useOriginalPrize = (dynamicPrizePoolRatio === undefined)
            ownerPercentage = 0.5
            hiredPercentage = 0.5
            halfSplit = true
        }

        if (!splitLeaderboard) {
            ownerPercentage = 1
        }

        let rankRange = false
        for (const i in prizeDistribution) {
            prizeDistribution[i].unit = unit
            let hiredPeoplePerPrize = 1
            let ownerPeoplePerPrize = 1
            if (prizeDistribution[i].prize < 1 || halfSplit) {

                if (i < prizeDistribution.length - 1) {
                    let j = parseInt(i) + 1
                    if (prizeDistribution[j].rank - prizeDistribution[i].rank > 1) {
                        rankRange = true
                        prizeDistribution[i].rankString = prizeDistribution[i].rank.toString() + ' - ' + (prizeDistribution[j].rank - 1).toString()
                        hiredPeoplePerPrize = parseInt(prizeDistribution[j].rank) - parseInt(prizeDistribution[i].rank)
                        ownerPeoplePerPrize = hiredPeoplePerPrize
                    }
                } else {
                    if (rankRange) {
                        prizeDistribution[i].rankString = prizeDistribution[i].rank.toString() + '+*'
                        if (hiredDrivers > prizeDistribution[i].rank) {
                            hiredPeoplePerPrize = hiredDrivers - prizeDistribution[i].rank
                        } else {
                            hiredPeoplePerPrize = -1
                        }

                        if (ownerDrivers > prizeDistribution[i].rank) {
                            ownerPeoplePerPrize = ownerDrivers - prizeDistribution[i].rank
                        } else {
                            ownerPeoplePerPrize = -1
                        }
                    }
                }

                if (!prizeDistribution[i].rankString) {
                    prizeDistribution[i].rankString = prizeDistribution[i].rank.toString()
                }

                let currentPrize = prizeDistribution[i].prize * (useOriginalPrize ? 1 : prizeTotal)

                if (hiredPeoplePerPrize !== -1) {
                    prizeDistribution[i].hiredPrize = ((useOriginalPrize ? 1 : hiredPercentage) * currentPrize / hiredPeoplePerPrize).toFixed(2)
                    if (i == prizeDistribution.length - 1 && parseInt(prizeDistribution[i].hiredPrize) > 0.3 * parseInt(prizeDistribution[i - 1].hiredPrize)) {
                        prizeDistribution[i].hiredPrize = (0.3 * prizeDistribution[i - 1].hiredPrize).toFixed(2)
                    }
                } else {
                    prizeDistribution[i].hiredPrize = 0
                }

                if (ownerPeoplePerPrize !== -1) {
                    prizeDistribution[i].ownerPrize = ((useOriginalPrize ? 1 : ownerPercentage) * currentPrize / ownerPeoplePerPrize).toFixed(2)
                    if (i == prizeDistribution.length - 1 && parseInt(prizeDistribution[i].ownerPrize) > 0.3 * parseInt(prizeDistribution[i - 1].ownerPrize)) {
                        prizeDistribution[i].ownerPrize = (0.3 * prizeDistribution[i - 1].ownerPrize).toFixed(2)
                    }
                } else {
                    prizeDistribution[i].ownerPrize = 0
                }
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
                                {splitLeaderboard || percentagePrizePool ? prizeRow.ownerPrize : prizeRow.prize} {unit}
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
        };
    }

    generatePrizeTableContent(sessionData, participation, prizeDistribution, splitLeaderboard, totalPrizeString, dynamicPrizePoolRatio, percentagePrizePool) {
        this.setPrizeTable(generatePrizeTable(sessionData, participation, prizeDistribution, splitLeaderboard, totalPrizeString, dynamicPrizePoolRatio, percentagePrizePool))
    }

    setPrizeTable(value) {
        this.setState({
            prizeTable: value
        })
    }

    prizeAsyncGenerator = async () => {
        this.generatePrizeTableContent(this.props.eventData.sessionData,
            this.props.eventData.participation,
            this.props.eventData.data.prize,
            this.props.eventData.data.splitLeaderboard,
            this.props.eventData.data.prize_total.toString(),
            this.props.eventData.data.dynamicPrizePoolRatio,
            this.props.eventData.data.percentagePrizePool)
    }

    componentDidMount() {
        this.prizeAsyncGenerator()
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
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(3);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const columns = [
    { title: "Series", field: "data.series", hidden: true },
    { title: "Name", field: "data.name", filterPlaceholder: 'Filter Name' },
    { title: "Rank", field: "rank", filterPlaceholder: 'Filter Rank', hidden: true },
    { title: "Time", field: "time", filterPlaceholder: 'Filter Time', hidden: true },
    { title: "REVV", field: "RewardString", filterPlaceholder: 'Filter REVV', hidden: true },
    { title: "Tries", field: "tries", filterPlaceholder: 'Filter Tries', hidden: true },
    {
        title: "View Pizes", field: "", render: rowData => {
            if (new Date(rowData.endTimestamp).getTime() < new Date().getTime()) {
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
    { title: "Penalties", field: "data.penaltySystem", render: rowData => { return rowData.data.penaltySystem ? <Checkbox checked /> : <Checkbox checked={false} /> } },
    { title: "Split", field: "data.splitLeaderboard", render: rowData => { return rowData.data.splitLeaderboard ? <Checkbox checked /> : <Checkbox checked={false} /> } },
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
        singleDataPoint.startTimestamp = new Date(parseFloat(singleDataPoint.startTimestamp))
        singleDataPoint.endTimestamp = new Date(parseFloat(singleDataPoint.endTimestamp))
        if (singleDataPoint.data.prize_total.toString().toUpperCase().includes("REVV")) {
            singleDataPoint.data.prize_total_formatted = singleDataPoint.data.prize_total
        } else {
            singleDataPoint.data.prize_total_formatted = singleDataPoint.data.prize_total.toString() + " $"
        }

        return singleDataPoint
    })

    eventData = eventData.filter(singleDataPoint => { return !singleDataPoint.data.practice })

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
            columns: columns,
            totalREVV: undefined,
            totalDollars: undefined,
            totalTries: undefined,
            REVVPrice: 0.0,
            averageRank: 0.0,
            averageREVV: 0.0,
            averageTries: 0.0
        };
    }

    setEventData(eventData) {
        this.setState({
            eventData: eventData,
            eventDataLoaded: true
        })
    }

    setEventDataLoaded(value) {
        this.setState({ eventDataLoaded: value })
    }

    BasicTable = async () => {
        let eventData
        await revvData.get('events').then((response) => {
            eventData = response.data
            eventData = formatEventData(eventData);

        }).catch((e) => {
            console.error(e)
        })

        await revvData.get('leaderboards').then((response) => {
            this.setPrizeData(response.data, eventData)
        }).catch((e) => {
            console.error(e)
        })

        this.setEventData(eventData);
    };

    setPrizeData = async (data, eventData) => {
        let prizeData = {}
        data.forEach(element => {
            let owner = element.leaderboard_id.includes(ownerSuffix)
            let hired = element.leaderboard_id.includes(hiredSuffix)
            let sessionID = element.leaderboard_id.replace(leaderboardPrefix, '').replace(ownerSuffix, '').replace(hiredSuffix, '')
            let count = parseInt(element.count.$numberLong)

            if (owner) {
                if (!prizeData[sessionID]) {
                    prizeData[sessionID] = { 'owner': count }
                } else {
                    prizeData[sessionID].owner = count
                }
            }

            if (hired) {
                if (!prizeData[sessionID]) {
                    prizeData[sessionID] = { 'hired': count }
                } else {
                    prizeData[sessionID].hired = count
                }
            }

            if (!owner && !hired) {
                if (!prizeData[sessionID]) {
                    prizeData[sessionID] = { 'total': count }
                } else {
                    prizeData[sessionID].total = count
                }
            }

            if (prizeData[sessionID] && prizeData[sessionID].hired && prizeData[sessionID].owner) {
                prizeData[sessionID].total = parseInt(prizeData[sessionID].hired) + parseInt(prizeData[sessionID].owner)
            }
        });

        await revvData.get('sessions').then((response) => {
            let sessions = response.data
            eventData.forEach(event => {
                let currentSessionData = getArrayValue(sessions, 'session_id', event.id.toUpperCase())
                if (currentSessionData) {
                    event.sessionData = currentSessionData
                }

                if (prizeData[event.id.toUpperCase()]) {
                    event.participation = prizeData[event.id.toUpperCase()]
                }
            })
        }).catch((e) => {
            console.error(e)
        })
    }

    componentDidMount() {
        this.BasicTable();
    }

    setWalletAddress(value) {
        this.setState({
            walletAddress: value,
            walletPositions: undefined,
            columns: columns,
            totalREVV: undefined,
            totalDollars: undefined,
            totalTries: undefined,
            REVVPrice: 0.0,
            averageRank: 0.0,
            averageREVV: 0.0,
            averageTries: 0.0
        })
    }

    filterWallet(entry) {
        return entry.wallet === this.walletAddress
    }

    setREVVPrice(REVVPrice) {
        this.setState({
            REVVPrice: REVVPrice
        })
    }


    getREVVPrice = async (e) => {
        await CoingeckoPrice
            .get(`price?ids=revv&vs_currencies=usd`)
            .then((response) => {
                this.setREVVPrice(response.data.revv.usd)
            }).catch((e) => {
                console.error(e)
            });
    }

    setWalletPosition = (walletPositions, walletTransactions) => {

        this.setState({ walletPositions: walletPositions })
        let columnsDeepCopy = JSON.parse(JSON.stringify(columns));
        columnsDeepCopy = columnsDeepCopy.filter(function (obj) {
            return obj.field !== '';
        });

        columnsDeepCopy[2].hidden = false
        columnsDeepCopy[3].hidden = false
        columnsDeepCopy[4].hidden = false
        columnsDeepCopy[5].hidden = false

        this.setState({
            columns: columnsDeepCopy
        });

        this.getREVVPrice()

        let totalREVV = 0.0
        let totalDollars = 0.0
        let totalRank = 0.0
        let participatedREVVCount = 0.0
        let paidTriesCount = 0.0
        let totalTries = 0.0

        this.state.eventData.forEach(event => {
            event.REVVReward = 0.0
            event.dollarReward = 0.0
            event.rank = 0
            let tryCount = walletTransactions.reduce(function (n, val) {
                return n + (new Date(val.timeStamp) >= new Date(event.startTimestamp) && new Date(val.timeStamp) <= new Date(event.endTimestamp));
            }, 0);

            if (event.sessionData && walletPositions[event.id]) {
                let currentWalletPosition = walletPositions[event.id]
                let currentRank = parseInt(currentWalletPosition.rank)
                event.rank = currentRank
                event.time = millisToMinutesAndSeconds(walletPositions[event.id].time)
                generatePrizeTable(event.sessionData,
                    event.participation,
                    event.data.prize,
                    event.data.splitLeaderboard,
                    event.data.prize_total.toString(),
                    event.data.dynamicPrizePoolRatio,
                    event.data.percentagePrizePool)

                let prize = event.data.prize
                let walletPrize = undefined
                for (let index = 0; index < prize.length; index++) {
                    const prizeRank = prize[index];
                    const nextIndex = index + 1
                    if (nextIndex === prize.length) {
                        walletPrize = prizeRank
                        break;
                    } else if (currentRank >= parseInt(prizeRank.rank) && currentRank < parseInt(prize[nextIndex].rank)) {
                        walletPrize = prizeRank
                        break;
                    }
                }

                event.unit = "REVV"
                if (walletPrize) {
                    let finalPrize = ''
                    if (event.data.splitLeaderboard) {
                        finalPrize = currentWalletPosition.hired ? walletPrize.hiredPrize : walletPrize.ownerPrize
                    } else {
                        finalPrize = event.data.percentagePrizePool ? walletPrize.ownerPrize : walletPrize.prize
                    }

                    if (walletPrize.unit === "REVV") {
                        event.tries = tryCount
                        totalTries += parseFloat(tryCount)
                        if (tryCount > 0) {
                            paidTriesCount += 1.0
                        }
                        participatedREVVCount += 1.0
                        event.REVVReward += parseFloat(finalPrize)
                        event.RewardString = event.REVVReward.toString() + " REVV"
                        totalREVV += parseFloat(finalPrize)
                        totalRank += currentRank
                    } else {
                        event.unit = "$"
                        event.tries = tryCount
                        event.dollarReward += parseFloat(finalPrize)
                        totalDollars += parseFloat(finalPrize)
                        event.RewardString = event.dollarReward.toString() + " $"
                    }
                }
            }
        });


        if (totalRank > 0 && totalREVV > 0) {
            this.setAverages(totalREVV / participatedREVVCount, totalRank / participatedREVVCount, totalTries / paidTriesCount)
        } else {
            this.setAverages(0, 0)
        }

        this.setTotalPrizes(totalREVV, totalDollars, totalTries)
        this.setEventDataLoaded(true)
    }

    setTotalPrizes(totalREVV, totalDollars, totalTries) {
        this.setState({
            totalREVV: totalREVV,
            totalDollars: totalDollars,
            totalTries: totalTries,
        })
    }

    getWalletPositions = async () => {
        this.setEventDataLoaded(false)
        let walletPositions = {};
        let allleaderboards = await revvData.get('walletPositions', { params: { walletAddress: this.state.walletAddress.toUpperCase() } })
        allleaderboards = allleaderboards.data
        this.state.eventData.forEach(event => {
            if (event.data.splitLeaderboard) {
                let ownerLeaderboard = leaderboardPrefix + event.id.toUpperCase() + ownerSuffix
                let hiredLeaderboard = leaderboardPrefix + event.id.toUpperCase() + hiredSuffix
                let ownerEntry = getArrayValue(allleaderboards, 'leaderboard_id', ownerLeaderboard)
                let hiredEntry = getArrayValue(allleaderboards, 'leaderboard_id', hiredLeaderboard)

                if (ownerEntry) {
                    walletPositions[event.id] = ownerEntry
                } else if (hiredEntry) {
                    hiredEntry.hired = true
                    walletPositions[event.id] = hiredEntry
                }
            } else {
                let leaderboard = leaderboardPrefix + event.id.toUpperCase()
                let ownerEntry = getArrayValue(allleaderboards, 'leaderboard_id', leaderboard)
                if (ownerEntry) {
                    walletPositions[event.id] = ownerEntry
                }
            }
        });

        let txns
        await revvTransactions
            .get(`&address=${this.state.walletAddress}`)
            .then((response) => {
                txns = response.data.result
                txns = this.filterTransactions(txns);
            }).catch((e) => {
                console.error(e);
            });

        this.setWalletPosition(walletPositions, txns)
    }

    filterTransactions(txns) {
        txns = txns.filter((txn) => {
            return txn.tokenSymbol === "REVV" && (txn.to.toUpperCase() === "0x069895FdA566d0364ABEc6e290BeE3D565c55666".toUpperCase() ||
                txn.to.toUpperCase() === "0X955694777027A9A343B19D38C3DBEE1D494CFA24") && txn.value === "5000000000000000000";
        });

        txns = txns.map((txn) => {
            txn.timeStamp = new Date(txn.timeStamp * 1000)
            return txn;
        })

        return txns;
    }


    setAverages(averageREVV, averageRank, averageTries) {
        this.setState({
            averageREVV: averageREVV,
            averageRank: averageRank,
            averageTries: averageTries,
        })
    }


    render() {

        return (
            <Grid container spacing={3} >
                <Grid item md={12} xs={12}>
                    <Alert severity="error">Calculations may not always be correct!</Alert>
                </Grid>
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
                {this.state.totalREVV &&
                    <React.Fragment>
                        <Grid item md={6} xs={12} alignContent="center" alignItems="center">
                            <TextField
                                id="totalRevv"
                                label="Total REVV (REVV Prize Structure)"
                                variant="outlined"
                                disabled
                                fullWidth
                                value={this.state.totalREVV.toFixed(2).toString() + " REVV" + (this.state.REVVPrice ? " (" + (this.state.REVVPrice * this.state.totalREVV).toFixed(2).toString() + " $)" : "")}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} alignContent="center" alignItems="center">
                            <TextField
                                id="totalDollars"
                                label="Total Dollars ($ Prize Structure)"
                                variant="outlined"
                                disabled
                                fullWidth
                                value={this.state.totalDollars.toFixed(2).toString() + " $"}
                            />
                        </Grid>
                    </React.Fragment>
                }{this.state.averageRank > 0 &&
                    <React.Fragment>
                        <Grid item md={6} xs={12} alignContent="center" alignItems="center">
                            <TextField
                                id="averageRank"
                                label="Average Rank (REVV Prize Structure)"
                                variant="outlined"
                                disabled
                                fullWidth
                                value={this.state.averageRank.toFixed(0).toString()}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} alignContent="center" alignItems="center">
                            <TextField
                                id="averageREVV"
                                label="Average REVV Earned (REVV Prize Structure)"
                                variant="outlined"
                                disabled
                                fullWidth
                                value={this.state.averageREVV.toFixed(2).toString() + " REVV" + (this.state.REVVPrice ? " (" + (this.state.REVVPrice * this.state.averageREVV).toFixed(2).toString() + " $)" : "")}
                            />
                        </Grid>
                    </React.Fragment>
                }{this.state.totalTries &&
                    <React.Fragment>
                        <Grid item md={6} xs={12} alignContent="center" alignItems="center">
                            <TextField
                                id="totalTries"
                                label="Total Tries (REVV Prize Structure)"
                                variant="outlined"
                                disabled
                                fullWidth
                                value={this.state.totalTries.toFixed(0).toString() + " Tries" + (this.state.REVVPrice ? " (" + (this.state.totalTries * 5) + " REVV/" + (this.state.REVVPrice * this.state.totalTries * 5).toFixed(2).toString() + " $)" : "")}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} alignContent="center" alignItems="center">
                            <TextField
                                id="averageTries"
                                label="Average Tries (REVV Prize Structure)"
                                variant="outlined"
                                disabled
                                fullWidth
                                value={this.state.averageTries.toFixed(0).toString() + " Tries" + (this.state.REVVPrice ? " (" + (this.state.averageTries * 5).toFixed(2) + " REVV/" + (this.state.REVVPrice * this.state.averageTries * 5).toFixed(2).toString() + " $)" : "")}
                            />
                        </Grid>
                    </React.Fragment>
                }
                <Grid item xs={12}>
                    <MaterialTable
                        theme={theme()}
                        style={{ width: "100%", display: "grid" }}
                        title="REVV Leaderboards"
                        columns={this.state.columns}
                        data={this.state.eventData}
                        icons={tableIcons}
                        isLoading={!this.state.eventDataLoaded}
                        options={{
                            pageSize: 10,
                            pageSizeOptions: [5, 10, 20, { value: this.state.eventData ? parseInt(this.state.eventData.length) : 100, label: 'All' }],
                            filtering: true,
                            selection: true,
                            search: false,
                            toolbar: true,
                            grouping: true,
                            exportButton: true,
                            exportAllData: true

                        }}
                        onSelectionChange={(rows) => {
                            let totalREVV = 0.0
                            let totalDollars = 0.0
                            let totalRank = 0.0
                            let participatedREVVCount = 0.0
                            let paidTriesCount = 0.0
                            let totalTries = 0.0

                            if (rows.length === 0) {
                                rows = this.state.eventData
                            }

                            rows.forEach(row => {
                                totalREVV += parseFloat(row.REVVReward)
                                totalDollars += parseFloat(row.dollarReward)
                                if (row.unit === "REVV") {
                                    totalRank += parseFloat(row.rank)
                                    participatedREVVCount += 1.0
                                    totalTries += row.tries
                                    if (row.tries && row.tries > 0) {
                                        paidTriesCount += 1.0
                                    }
                                }
                            });

                            if (totalRank > 0 && totalREVV > 0) {
                                this.setAverages(totalREVV / participatedREVVCount, totalRank / participatedREVVCount, totalTries / paidTriesCount)
                            } else {
                                this.setAverages(0, 0)
                            }

                            this.setTotalPrizes(totalREVV, totalDollars, totalTries)
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
}
