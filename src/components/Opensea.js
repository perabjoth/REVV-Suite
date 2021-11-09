import React, { Component } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Grid, Typography } from '@material-ui/core';
import { ExpandMore } from '@mui/icons-material';
import OpenseaLogo from '../img/Opensea.svg'
import { Avatar, LinearProgress } from '@mui/material';


export default class Opensea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: false,
            loadingIframe: false,
        }
    }

    setPreview(value) {
        this.setState({ preview: value, loadingIframe: value });
    }

    setLoadingIframe(value) {
        this.setState({ loadingIframe: value });
    }

    componentDidMount(){

    }

    render() {
        return (
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Avatar src={OpenseaLogo} /> <Typography variant="h4" noWrap component="div" >&nbsp;REVV NFT Collection</Typography>
                </AccordionSummary>
                <AccordionDetails style={{display: 'block'}}>
                    <Grid container spacing={3} >
                        {!this.state.preview &&
                            <Grid item md={6} xs={6}>
                                <Button color="primary" fullWidth variant="contained" onClick={() => this.setPreview(true)} >Preview Collection</Button>
                            </Grid>
                        }
                        <Grid item md={this.state.preview ? 12 : 6} xs={this.state.preview ? 12 : 6}>
                            <a target="_blank" rel="noreferrer" href="https://opensea.io/collection/revv-motorsport-inventory">
                                <Button color="primary" fullWidth variant="contained" >View Opensea Collection</Button>
                            </a>
                        </Grid>
                    </Grid>
                    {this.state.loadingIframe &&
                        <Grid container spacing={3} >
                            <Grid item md={12} xs={12}>
                                <Box sx={{ width: '100%' }}>
                                    <Typography variant="h4" noWrap component="div" align='center' >Loading...</Typography>
                                    <LinearProgress color="secondary" fullWidth />
                                </Box>
                            </Grid>
                        </Grid>
                    }
                    {this.state.preview &&
                        <Grid container spacing={3} >
                            <Grid item md={12} xs={12}>
                                <iframe src='https://opensea.io/collection/revv-motorsport-inventory?embed=true'
                                    width='100%'
                                    height='1000px'
                                    title='opensea'
                                    onLoad={() => this.setLoadingIframe(false)}
                                    frameborder='0'
                                    style={{ display: this.state.loadingIframe ? 'none' : '' }}
                                    allowfullscreen></iframe>
                            </Grid>
                        </Grid>
                    }
                </AccordionDetails>
            </Accordion>
        )
    }
}
