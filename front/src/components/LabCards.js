//comopnents 
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

//Iconos
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

export default function LabCard({ Laboratorio }) {
  return (
    <Card
      sx={{
        mt: 2,
        transition: "1s",
        "&:hover": { transform: "scale(0.95)" },
      }}
    >
      <CardActionArea sx={{}}>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/1000x200"
          height="200"
          alt="funcionalidad"
        />
        <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50, position: 'absolute', top: 8, right: 8, }}>
          <ScienceOutlinedIcon fontSize="large" sx={{ color: 'background.default', }} />
        </Avatar>
        <CardContent>
          <Typography variant="h4">{Laboratorio.nombre}</Typography>
          <Typography variant="h6">Location:</Typography>
          <Typography component="p" variant="body1">
            {Laboratorio.ubicacion}
          </Typography>
          <Typography variant="h6">Description:</Typography>
          <Typography component="p" variant="body1">
            {Laboratorio.descripcion}
          </Typography>
          <Typography variant="h6">Equipment:</Typography>
          <Typography component="p" variant="body1">
            {Laboratorio.equipamiento}
          </Typography>
          <Typography variant="h6">Capacity:</Typography>
          <Typography component="p" variant="body1">
            {Laboratorio.capacidad}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ display: { xs: "block", md: "none" } }}>
        <Button variant="contained" color="primary">
          <DoneOutlinedIcon />
        </Button>
        <Button variant="contained" color="primary">
          <CalendarMonthOutlinedIcon />
        </Button>
      </CardActions>

      <CardActions sx={{ display: { xs: "none", md: "block" } }}>
        <Button variant="contained" startIcon={<DoneOutlinedIcon />}>
          Reserve
        </Button>
        <Button variant="contained" startIcon={<CalendarMonthOutlinedIcon />}>
          Schedule
        </Button>
      </CardActions>
    </Card>
  );
};



