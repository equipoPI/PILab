import Container from "@mui/material/Container";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

export default function Settings() {
    const [open, setOpen] = useState(false)


    return (
        <Container sx={{ bgcolor: "background.default", p: 2, }}>
            <Button variant="contained" onClick={() => setOpen(true)}>
                Apply
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={() => setOpen(false)}
            >
                <Collapse in={open}>
                    <Alert severity="info"
                        onClose={() =>  setOpen(false) }
                    >This is an info alert — check it out!
                    </Alert>
                </Collapse>
            </Snackbar>

            {/* 
                <Alert severity="warning"
                    action={
                        <>
                            <Button color="inherit">Delete</Button>
                            <Button color="inherit">Update</Button>
                        </>
                    }
                >
                    This is a warning alert — check it out!
                </Alert>*/}

            <Box sx={{ display: "grid", gap: "1rem", mt: 2, }}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — check it out!
                </Alert>

            </Box>
        </Container>
    )
} 