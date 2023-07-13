import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea"; 
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

//Iconos
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';

export default function IntCard (){
    return(
        <Card
        sx={{
            mt: 2,
            transition: "1s",
            "&:hover": {transform: "scale(0.95)",},
        }}
        >
            <CardActionArea sx={{}}>
            <CardMedia
            component="img" 
            image="https://via.placeholder.com/1000x200"
            height="200"
            alt="funcionalidad">
            </CardMedia>
            <ScienceRoundedIcon  sx={{bgcolor: 'background.default',boxShadow: 4, margin:1,}}></ScienceRoundedIcon>
            <CoPresentRoundedIcon sx={{bgcolor: 'background.default', boxShadow: 4, margin:1,}}></CoPresentRoundedIcon>
            <CardContent>
                <Typography variant="h4">Name</Typography>
                <Typography variant="h6">Location</Typography>
                <Typography component="p" variant="body2">gle Chrome o Mozilla Firefox, proporcionan herramientas de desarrollo integradas que incluyen la capacidad de establecer puntos de interrupción. Puedes abrir la consola de desarrollador presionando F12 en la mayoría de los navegadores, luego navegar a la pestaña "Sources" o "Fuente</Typography>
            </CardContent>
            </CardActionArea>

            <CardActions sx={{display:{xs:"block",sm:"none",}}}>
                <Button variant="contained" color="primary"><DoneOutlinedIcon/></Button>
                <Button variant="contained" color="primary"><CalendarMonthOutlinedIcon/></Button>
                <Button Button variant="contained" color="error"><CancelOutlinedIcon/></Button>                
            </CardActions>

            <CardActions sx={{display:{xs:"none",sm:"block",}}}>
                <Button variant="contained" startIcon={<DoneOutlinedIcon/>}>
                Done
                </Button>
                <Button variant="contained" startIcon={<CalendarMonthOutlinedIcon/>}>
                Schedule
                </Button>
                <Button variant="contained" color="error" startIcon={<CancelOutlinedIcon/>}>
                Remove
                </Button>
            </CardActions>
        </Card>
    )
}