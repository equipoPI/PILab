import axios from "axios";

const URL =
    process.env.NODE_ENV === "production"
        ? import.meta.env.VITE_BACKEND_URL
        : "http://localhost:8000";

console.log(URL);

const UsuarioApi = axios.create({
    baseURL: `${URL}/api/v1/User/`,
});

const ReservasApi = axios.create({
    baseURL: `${URL}/api/v1/Res/`,
});

const HerramientasApi = axios.create({
    baseURL: `${URL}/api/v1/Her/`,
});

const AulasApi = axios.create({
    baseURL: `${URL}/api/v1/Aul/`,
});

const LaboratorioApi = axios.create({
    baseURL: `${URL}/api/v1/Lab/`,
});

const CalendarioApi = axios.create({
    baseURL: `${URL}/api/v1/Cal/`,
});

const NotificacionApi = axios.create({
    baseURL: `${URL}/api/v1/Not/`,
});

const PrioridadApi = axios.create({
    baseURL: `${URL}/api/v1/Pri/`,
});

export const getALLLab = () => {
    return LaboratorioApi.get('/')
}

export const getALLHer = () => {
    return HerramientasApi.get('/')
}

export const getALLAul = () => {
    return AulasApi.get('/')
}