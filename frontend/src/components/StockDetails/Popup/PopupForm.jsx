import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const PopupForm = (props) => {
  const { children, openPopup } = props;

  return (
    <div>
      <Dialog open={openPopup} fullWidth="md">
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default PopupForm;
