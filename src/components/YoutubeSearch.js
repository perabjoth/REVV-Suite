import React, { Component } from 'react'
import searchYoutube from 'youtube-api-v3-search';
import YouTube from 'react-youtube';
import { Grid } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

const opts = {
    height: isMobile ? '180' : '300',
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

export default class YoutubeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videosLoaded: false,
            videoComponent: undefined
        }
    }

    setVideosLoaded(value) {
        this.setState({ videosLoaded: value })
    }

    setVideoComponent(value) {
        this.setState({ videoComponent: value })
    }

    searchYoutube = async () => {
        const options = {
            q: 'REVV Racing',
            part: 'snippet',
            type: 'video',
            order: 'date',
            maxResults: 10
        }
        await searchYoutube('AIzaSyCVf-RD5wQBDOdROwBT2AozbDcrZHwQdrM', options).then((response => {
            this.setVideoComponent(this.generateVideos(response.items))
            this.setVideosLoaded(true);
        }));
    }

    generateVideos(videoList) {
        let videoComponent = []
        for (let index = 0; index < videoList.length; index+=2) {
            const video = videoList[index];
            const video2 = videoList[index+1]
            videoComponent.push(<Grid container spacing={3} >
                <Grid item md={6} xs={6} alignContent='center' alignItems='center'>
                    <YouTube videoId={video.id.videoId} opts={opts} />
                </Grid>
                <Grid item md={6} xs={6} alignContent='center' alignItems='center'>
                    <YouTube videoId={video2.id.videoId} opts={opts} />
                </Grid>
            </Grid>)
        }

        return videoComponent;
    }

    componentDidMount() {
        this.searchYoutube();
    }

    render() {
        return (
            <div>
                {this.state.videosLoaded && this.state.videoComponent}
            </div>
        )
    }
}
