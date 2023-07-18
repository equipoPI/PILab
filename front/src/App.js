import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Componente material UI
import Container from '@mui/material/Container';

//Iconos
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InputIcon from '@mui/icons-material/Input';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

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
