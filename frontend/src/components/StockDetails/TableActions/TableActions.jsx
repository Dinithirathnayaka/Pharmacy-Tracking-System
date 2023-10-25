import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import EditMedicine from "../EditMedicine/EditMedicine";
import PopupEditForm from "../Popup/PopupEditForm";

const TableActions = ({ rowId }) => {
  const [loading, setLoading] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const onDelete = () => {
    setOpenDeleteDialog(true);
  };

  const onEdit = () => {
    setOpenEditDialog(true);
  };

  const handleDeleteConfirm = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/medicines/${rowId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("Medicine delete Unsuccessful");
      } else {
        console.log("Medicine delete Successful");
      }
    } catch (error) {
      console.error("Error deleting medicine:", error);
    } finally {
      setLoading(false);
    }
    setOpenDeleteDialog(false);
  };

  const handleEditConfirm = () => {
    console.log("Handle edit");
  };

  return (
    <>
      <Tooltip title="Edit">
        <IconButton>
          <EditIcon onClick={onEdit} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={onDelete} disabled={loading}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this medicine?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            {loading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              "Delete"
            )}
          </Button>
        </DialogActions>
      </Dialog>

      <PopupEditForm  openEditPopup={openEditDialog} >
        <EditMedicine setEditOpenPopup={setOpenEditDialog} rowId={rowId}/>
      </PopupEditForm>
    </>
  );
};

export default TableActions;
