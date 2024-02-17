import React from 'react';
import {Dialog, DialogContent} from "@mui/material";
import {DialogProps} from "./Dialog.interface";

const DialogModal: React.FC<DialogProps> = ({open,close,children}) => {
    return (
        <Dialog
            open={open}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default DialogModal;