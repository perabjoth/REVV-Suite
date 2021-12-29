import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

export default class FreeCar extends Component {
    render() {
        return (
            <Grid container spacing={3} >
                <Grid item md={12} xs={12}>
                    <h1>
                        How To Earn Free Cars
                    </h1>

                    <h3>
                        There's a few ways to do so:

                    </h3>
                    <ol>
                        <li>
                            <p>
                                Go to the
                                <Link color="secondary" href="https://revvracing.com/" target="_blank"> REVV Racing Site </Link> and scroll down to the vehicles section.
                                Some of the vehicles will have a start earning symbol and you can click on them to see how to get a car.
                            </p>
                        </li>
                        <li>
                            <p>This method involves earning some free crypto. This can be done via a Learn and Earn program:</p>
                            <ul>
                                <li>
                                    <Link color="secondary" href="https://www.coinbase.com/earn/" target="_blank">Coinbase Earn</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://coinmarketcap.com/earn/" target="_blank">Coinmarketcap Earn</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://www.binance.com/en/support/announcement/c-93?navId=93" target="_blank">Binance Earn</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://earnathon.com/learn" target="_blank">Earnathon</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://phemex.com/learn-crypto" target="_blank">Phemex Earn</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://app.cakedefi.com/learn" target="_blank">CakeDefi Earn</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Similar to the previous method. This also involves earning crypto but requires some luck. This can be done via airdrops:</p>
                            <ul>
                                <li>
                                    <Link color="secondary" href="https://coinmarketcap.com/airdrop/" target="_blank">Coinmarketcap Airdrop</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://airdropalert.com/" target="_blank">Airdrop Alert</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://airdrops.io/" target="_blank">Airdrops.io</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://www.airdropsmob.com/" target="_blank">Airdrops Mob</Link>
                                </li>
                                <li>
                                    <Link color="secondary" href="https://www.airdropbob.com/" target="_blank">Airdrop Bob</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            If you have some funds that are in staking or some other form of interest bearing method, you can use the funds earned from that method to purchase a car.
                        </li>
                    </ol>
                </Grid>
            </Grid>
        )
    }
}
