import React, { Component } from 'react'
import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };
    }

    setCopied(value){
        this.setState({ copied: value })
    }

    markCopy(){
        this.setCopied(true)
    }

    render() {
        return (
            <CopyToClipboard text='0xcD107Eca2e99aaC18A6BcC830c07c703dc5044D4'
                onCopy={() => this.markCopy()}
                >
                <Tooltip title="Copied" open={this.state.copied} arrow >
                    <TextField
                        id="outlined-basic"
                        label="Donate"
                        variant="outlined"
                        value="0xcD107Eca2e99aaC18A6BcC830c07c703dc5044D4"
                        disabled
                        fullWidth
                        style={{
                            // width: "60ch"
                        }}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="copy"
                                        edge="end"
                                    >
                                        <ContentCopyIcon />
                                    </IconButton>
                                </InputAdornment>
                        }
                        } />
                </Tooltip>
            </CopyToClipboard>
        )
    }
}
