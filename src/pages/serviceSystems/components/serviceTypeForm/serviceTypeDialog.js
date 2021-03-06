import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addServiceType } from "../../../../features/service/serviceSlice";

const ServiceTypeDialog = ({ handleClose, open}) => 
{
    const [input, setInput] = useState({title: ''});

    const dispatch = useDispatch();

    const handleChange = (e) => setInput({...input, [e.target.name]: e.target.value});

    const handleAddNewType = () => 
    {
        dispatch(addServiceType(input));
        handleClose();
    }

    return (
        <Dialog
            maxWidth="xs"
            fullWidth={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Add new service"}
            </DialogTitle>
            <DialogContent>
                <Stack
                    direction="column"
                >
                    <TextField
                        name="title"
                        label="Service Type Name" 
                        fullWidth={true}
                        variant="outlined"
                        value={input.title}
                        onChange={handleChange}
                        sx={{marginTop: '1rem'}}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>CANCEL</Button>
                <Button onClick={handleAddNewType}>
                OK
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ServiceTypeDialog;