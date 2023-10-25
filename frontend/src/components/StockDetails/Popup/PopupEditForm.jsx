import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const PopupEditForm = (props) => {
  const { children, openEditPopup } = props;

  return (
    <div>
      <Dialog open={openEditPopup} fullWidth="md">
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default PopupEditForm;
