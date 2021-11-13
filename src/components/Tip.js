import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import FileCopy from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Tip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };
    }

    setCopied(value) {
        this.setState({ copied: value })
    }

    markCopy() {
        this.setCopied(true)
    }

    render() {
        return (
            <CopyToClipboard text='0xcD107Eca2e99aaC18A6BcC830c07c703dc5044D4'
                onCopy={() => this.markCopy()}
            >
                <Tooltip title={"Copied"} open={this.state.copied} arrow onClose={()=>this.setCopied(false)} >
                    <TextField
                        id="tip"
                        label="Tip"
                        variant="outlined"
                        value="0xcD107Eca2e99aaC18A6BcC830c07c703dc5044D4"
                        disabled
                        fullWidth
                        color="secondary"
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="copy"
                                        edge="end"
                                    >
                                        <FileCopy />
                                    </IconButton>
                                </InputAdornment>
                        }
                        } />
                </Tooltip>
            </CopyToClipboard>
        )
    }
}
