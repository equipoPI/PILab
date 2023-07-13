import './App.css';
import { Route, Routes } from 'react-router-dom';

//Componente material UI
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';


//Iconos
import AndroidIcon from "@mui/icons-material/Android";
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InputIcon from '@mui/icons-material/Input';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';


//practica video material UI del 1 al 6 incluido
/*
export default function App() {                //container, button, tipografia y box
  return (
    <Container sx={{p:3}}>                   

      <Container maxWidth="xl" sx={{border:5, boxShadow:15, p: 2}}>  
      <Typography variant="h1" textAlign="center">PILab</Typography>
      <Typography variant="h6" component="snap">Aulas</Typography>
      <Typography variant="h6" color="error">Laboratorios</Typography>
      <Typography variant="h6">Herramientas</Typography>
      </Container>


      <Container maxWidth="xl" sx={{border:5, boxShadow:15, p: 2}}>
      <Box sx={{border:2, boxShadow:5,}}>
      <Button  variant="contained" startIcon={<BorderColorIcon/>} sx={{m:2,}}>
      Reservar
      </Button>
      <Button  variant="contained" color="success" startIcon={<AutoStoriesIcon/>} sx={{m:2,}}> 
      Mis reservas
      </Button>
      <Button  variant="contained" color="warning" startIcon={<PersonIcon/>} sx={{m:2,}}>
      Iniciar Sesion
      </Button>
      </Box>
      </Container>
      
    </Container>
  );
}*/

//practica de grid video mui material del 7 al 9 icluido
/* 
import Grid from '@mui/material/Grid'
import Product from './components/Product';
import ExapleCard from './components/Cards';

export default function App(){
  return(
    <Container sx={{bgcolor:'background.default', p:3,}}>
      <Product/>
      <ExapleCard/>
      <Grid container spacing={3}>
      <Grid 
      item 
      xs={12}  //permite hacer responsive a la pantalla 
      sm={6} 
      md={4} 
      lg={3}
      xl={2}
      >
        <Container sx={{bgcolor:'background.paper',}}>
        <p>
        They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. 
        If used, these props may have undesirable effects on the height of the Grid item elements.
        </p>
        </Container>    
      </Grid>
      <Grid item 
      xs={12}   
      sm={6} 
      md={4}
      lg={3}
      xl={2}
      >
        <Container sx={{bgcolor:'background.paper',}}>
        <p>
        They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. 
        If used, these props may have undesirable effects on the height of the Grid item elements.
        </p>
        </Container>
      </Grid>
      <Grid item 
      xs={12}   
      sm={6} 
      md={4}
      lg={3}
      xl={2}
      >
        <Container sx={{bgcolor:'background.paper',}}>
        <p>
        They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. 
        If used, these props may have undesirable effects on the height of the Grid item elements.
        </p>
        </Container>
      </Grid>
      <Grid item 
      xs={12}   
      sm={6} 
      md={4}
      lg={3}
      xl={2}
      >
        <Container sx={{bgcolor:'background.paper',}}>
        <p>
        They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. 
        If used, these props may have undesirable effects on the height of the Grid item elements.
        </p>
        </Container>
      </Grid>      
      </Grid>
    </Container>
  )
}
*/

//practica del 10 al 14 inclusive
import Nbar from './components/NBar/Nbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import SignUp from './pages/SignIn';

const nLinks = [
  { title: "Home", path: "/", icon: <HomeIcon />, }, //en # iria la URL de direccion para vincular api, back y front
  { title: "Profile", path: "/Profile", icon: <PersonIcon />, },
  { title: "Log in", path: "/Login", icon: <InputIcon />, },
  { title: "Sign up", path: "/SignUp", icon: <ArrowOutwardOutlinedIcon />, },
  { title: "Settings", path: "/Settings", icon: <SettingsIcon />, },
  { title: "Discover", path: "/Discover", icon: <></>, },
];

export default function App() {
  return (
    <Container sx={{ bgcolor: "background.default", p: 2, }}>
      <Nbar nLinks={nLinks} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

    </Container>
  );
}
