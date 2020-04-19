import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Buttons() {
    const [button, setButton] = React.useState(false);

    const handleClickOpen = () => {
        setButton(true);
    };

    const handleClose = () => {
        setButton(false);
    };

    const submit = () => {

        handleClose()
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                Change Name
            </Button>
            <Dialog open={button} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Name</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={submit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}