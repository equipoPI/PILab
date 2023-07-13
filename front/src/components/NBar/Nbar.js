//componentes y documentos
import NBarList from "./NBarList";    //NavListDrawer.js del video
import Button from '@mui/material/Button';
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar  from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

//Iconos
import MenuIcon from "@mui/icons-material/Menu";

export default function Nbar({nLinks}){
    const [open, setOpen] = useState(false)
    
    return(
        <>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                color="inherit"
                size="large"
                onClick={() => setOpen(true)}
                sx={{display: {xs:"flex", sm:"none", md:"none",} }}
                >
                    <MenuIcon/>
                </IconButton>
                
                <Typography variant='h6' sx={{flexGrow:1,}}>PILab</Typography>

                <Box sx={{display: {xs:"none", sm:"block", md:"none",} }}>
                {nLinks.map((item) => (
                    <Button
                    size="small"
                    color="inherit"
                    key={item.title}
                    component={NavLink}
                    startIcon={item.icon}
                    to={item.path}
                    >                                           
                        {item.title}
                    </Button>
                ))}
                </Box>

                <Box sx={{display: {xs:"none", sm:"none", md:"block",} }}>
                {nLinks.map((item) => (
                    <Button
                    size="medium"
                    color="inherit"
                    key={item.title}
                    component={NavLink}
                    startIcon={item.icon}
                    to={item.path}
                    >                                           
                        {item.title}
                    </Button>
                ))}
                </Box>
            </Toolbar>
        </AppBar>

        <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{display: {xs:"flex", sm:"none",} }}
        >
            <NBarList 
            nLinks={nLinks}
            NavLink={NavLink}
            setOpen={setOpen}/> 
        </Drawer>
        
        </>
    )
}