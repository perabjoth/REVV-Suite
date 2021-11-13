import React, { Component } from 'react'
import Opensea from './Opensea'
import YoutubeSearch from './YoutubeSearch'

export default class Home extends Component {
    render() {
        return (
            <div>
                <br />
                <Opensea />
                <br />
                <YoutubeSearch />
            </div>
        )
    }
}
