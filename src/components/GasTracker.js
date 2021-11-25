import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'
import polygonGas from '../api/polygonGas'

export default class GasTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            gasData: undefined,
            lastRetrieved: undefined
        }
    }

    updateGasPrice = async () => {
        await polygonGas.get().then((response) => {
            let currentTimeStamp =  this.state.gasData && JSON.stringify(this.state.gasData) === JSON.stringify(response.data) ? this.state.lastRetrieved : new Date()

            this.setState({
                loaded: true,
                gasData: response.data,
                lastRetrieved: currentTimeStamp
            })
        }).catch((e) => {
            console.error(e)
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.updateGasPrice, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <Grid container spacing={3}  >
                {!this.state.loaded &&
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center">
                            Loading...
                        </Typography>
                        <br />
                        <LinearProgress />
                    </Grid>
                }
                {this.state.loaded &&
                    <React.Fragment>
                        <Grid item xs={12} >
                            <Card variant="outlined" style={{ display: "flex", alignItems: 'center', flexDirection: 'column', }}>
                                <Typography variant="subtitle1" >
                                    Last Updated: {this.state.lastRetrieved.toDateString() + " " + this.state.lastRetrieved.toLocaleTimeString()}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Card variant="outlined" style={{ display: "flex", alignItems: 'center', flexDirection: 'column', }}>
                                <Typography variant="h5" >
                                    Standard
                                </Typography>
                                <Typography variant="h4" style={{ color: "#00c9a7" }}>
                                    {this.state.gasData.safeLow} Gwei
                                </Typography>
                                <Typography color="textSecondary">
                                    (30-60 secs)
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Card variant="outlined" style={{ display: "flex", alignItems: 'center', flexDirection: 'column', }}>
                                <Typography variant="h5" >
                                    Fast
                                </Typography>
                                <Typography variant="h4" style={{ color: "#8247e5" }}>
                                    {this.state.gasData.standard} Gwei
                                </Typography>
                                <Typography color="textSecondary">
                                    (10-30 secs)
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Card variant="outlined" style={{ display: "flex", alignItems: 'center', flexDirection: 'column', }}>
                                <Typography variant="h5" >
                                    Rapid
                                </Typography>
                                <Typography variant="h4" style={{ color: "#A5343E" }}>
                                    {this.state.gasData.fast} Gwei
                                </Typography>
                                <Typography color="textSecondary">
                                    (5-10 secs)
                                </Typography>
                            </Card>
                        </Grid>
                    </React.Fragment>
                }
            </Grid>
        )
    }
}
