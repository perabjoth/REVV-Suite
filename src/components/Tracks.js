import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


function importAll(r) {
    return r.keys().map(r);
}

const tracks = importAll(require.context('../img/tracks', true, /\.(png|jpe?g|svg)$/));

export default class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: tracks,
        }
    }

    componentDidMount() {
        let tracksWithDimensions = JSON.parse(JSON.stringify(this.state.tracks));
        tracksWithDimensions.forEach(track => {
            let height = 0
            let width = 0
            let img = new Image()
            img.onload = function () {
                height = img.height
                width = img.width
                track.height = height
                track.width = width
            }

            img.src = track.default
        });

        console.log(tracksWithDimensions)

        this.setState({
            tracks: tracksWithDimensions
        })

    }

    render() {


        return (
            <Grid container spacing={3} >
                {
                    this.state.tracks.map((track) => {
                        return <Grid item xs={12}>
                            <Card>
                                <CardMedia className="track" style={{ width: track.width ? track.width.toString() + "px" : "200px", height: track.height ? track.height.toString() + "px" : "100px" }} image={track.default} />
                                <CardContent>
                                    {track.default.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, "").replace(/\.[^/.]+$/, "")}
                                </CardContent>
                            </Card>
                        </Grid>
                    })
                }
            </Grid>
        )
    }
}
