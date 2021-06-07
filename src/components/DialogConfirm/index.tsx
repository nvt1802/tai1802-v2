import React, { FC } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core"

interface ConfirmDialogProps {
  open: any
  handleClose: any
  handleClickConfirm: any
  title: string
  content: string
  labelBtnConfirm: string
  labelBtnClose: string
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  open,
  handleClose,
  handleClickConfirm,
  title = "",
  content = "",
  labelBtnConfirm = "",
  labelBtnClose = "",
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickConfirm} color="primary">
          {labelBtnConfirm}
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          {labelBtnClose}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
