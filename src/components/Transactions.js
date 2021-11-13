import React, { Component, forwardRef } from 'react'
import web3 from 'web3';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import revvrewards from '../api/revvrewards';
import MaterialTable from '@material-table/core';
import Grid from '@material-ui/core/Grid';
import theme from './theme';

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

const columns = [
    { field: 'timeStamp', title: 'Date', type: 'date', filterPlaceholder: 'Filter Date' },
    { field: 'value', title: 'Reward', filterPlaceholder: 'Filter Reward' },
]


export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            walletAddress: "",
            validAddress: true,
            validationDone: false,
            isLoading: false,
            dataLoaded: false,
            data: []
        }
    }


    setIsLoading(value) {
        this.setState({ isLoading: value })
    }

    setDataLoaded(value) {
        this.setState({
            dataLoaded: value
        });
    }

    setData(data) {
        this.setState({
            data: data
        });
    }

    setWalletAddress(walletAddress) {
        this.setState({
            walletAddress: walletAddress,
            validationDone: false,
            dataLoaded: false
        });
    }

    getTransactions = async (e) => {
        e.preventDefault();
        let validAddress = web3.utils.isAddress(this.state.walletAddress)

        this.setState({
            validAddress: validAddress,
            validationDone: true
        });


        if (validAddress) {
            let addressStamp = this.state.walletAddress + new Date().getDate().toString()
            if (localStorage.getItem(addressStamp)) {
                this.setData(JSON.parse(localStorage.getItem(addressStamp)));
                this.setDataLoaded(true);
            } else {
                this.setIsLoading(true);
                await revvrewards
                    .get(`&address=${this.state.walletAddress}`)
                    .then((response) => {
                        let txns = response.data.result
                        txns = this.filterData(txns);
                        txns = this.formatData(txns);
                        this.setData(txns);
                        this.setDataLoaded(true);
                        this.setIsLoading(false);
                    }).catch((e) => {
                        console.error(e);
                        this.setIsLoading(false);
                    });
            }
        }
    }

    filterData(txns) {
        txns = txns.filter((txn) => {
            return txn.tokenSymbol === "REVV" && txn.from === "0x9c8a06f0197ee718cd820adeb48a88ea2a9b5c48";
        });
        return txns;
    }

    formatData(txns) {
        txns = txns.map((txn) => {
            txn.id = txn.hash
            txn.timeStamp = new Date(txn.timeStamp * 1000)
            txn.value = parseFloat(web3.utils.fromWei(txn.value)).toFixed(2)
            return txn;
        })

        return txns;
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: "flex", alignItems: 'center', flexDirection: 'column', }}>
                    <Avatar style={{ background: 'red', color: 'white' }}>
                        <AccountBalanceWalletIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        REVV Rewards
                    </Typography>
                </Grid>
                <Grid item xs={12} component="form" onSubmit={(e) => { this.getTransactions(e) }} noValidate sx={{ mt: 3 }}>
                    <TextField
                        margin="normal"
                        color="primary"
                        required
                        fullWidth
                        id="wallet"
                        label="Wallet Address"
                        name="wallet"
                        autoFocus
                        variant="outlined"
                        error={!this.state.validAddress}
                        onChange={(e) => this.setWalletAddress(e.target.value)}
                    />
                    <br />
                    {!this.state.isLoading && <Button
                        type="submit"
                        color="primary" 
                        fullWidth
                        variant="contained"
                    >
                        Get Rewards List
                    </Button>}
                    {this.state.isLoading && <LinearProgress />}
                </Grid>
                {this.state.dataLoaded &&
                    <Box sx={{
                        marginTop: 8,
                        display: 'contents',
                        height: '100vh',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <br />
                        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
                            <div style={{ flexGrow: 1 }}>
                                <MaterialTable
                                    theme={theme()}
                                    title="REVV Rewards"
                                    data={this.state.data}
                                    columns={columns}
                                    icons={tableIcons}
                                    isLoading={this.state.isLoading}
                                    options={{
                                        pageSize: 10,
                                        pageSizeOptions: [5, 10, 20, { value: this.state.data ? parseInt(this.state.data.length) : 0, label: 'All' }],
                                        filtering: true,
                                        search: false,
                                    }} />
                            </div>
                        </div>
                    </Box>
                }
            </Grid>
        )
    }
}