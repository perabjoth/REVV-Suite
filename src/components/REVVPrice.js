import React, { Component } from 'react'
import CoingeckoPrice from '../api/CoingeckoPrice';
import TextField from '@material-ui/core/TextField';
import REVVlogo from '../img/REVV_logo.png';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

export default class REVVPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0
        }
    }

    setPrice(value) {
        this.setState({ price: value })
    }

    getPrice = async (e) => {
        await CoingeckoPrice
            .get(`price?ids=revv&vs_currencies=usd`)
            .then((response) => {
                this.setPrice(response.data.revv.usd)
            }).catch((e) => {
                console.error(e)
            });
    }


    componentDidMount() {
        this.getPrice()
    }

    render() {
        return (
            <TextField
                fullWidth
                id="revvprice"
                label="REVV Price"
                variant="outlined"
                value={`${this.state.price.toString()} USD`}
                disabled
                color="primary"
                InputProps={{
                    startAdornment:
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="copy"
                                edge="end"
                            >
                                <Avatar src={REVVlogo} />
                            </IconButton>
                        </InputAdornment>,
                }
                } >

            </TextField>
        )
    }
}
