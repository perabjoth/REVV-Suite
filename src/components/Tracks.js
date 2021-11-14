import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';

function importAll(r) {
    return r.keys().map(r);
}

const tracks = importAll(require.context('../img/tracks', false, /\.(png|jpe?g|svg)$/));

export default class Tracks extends Component {

    render() {
        console.log(tracks)
        return (
            <Grid container spacing={3} >
                {
                    tracks.map((track) => {
                        return <Grid item xs={12}>
                            <img src={track.default} />

                        </Grid>
                    })
                }
            </Grid>
        )
    }
}
