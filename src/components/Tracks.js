import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import reactImageSize from 'react-image-size';


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

            reactImageSize(track.default).then(({ width, height }) => {
                track.width = width
                track.height = height
                this.setState({
                    tracks: tracksWithDimensions
                })
            }).catch((e) => {
                console.error(e)
            });
        });
    }

    render() {


        return (
            <Grid container spacing={3} >
                {

                    this.state.tracks.map((track) => {
                        let width = track.width
                        let height = track.height

                        if (!width) {
                            width = 100
                        }

                        if (!height) {
                            height = 200
                        }

                        return <Grid item xs={12}>
                            <Card>
                                <CardMedia
                                    className="track"
                                    style={{ width: width.toString() + "px", height: height.toString() + "px" }}
                                    image={track.default}
                                />
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
