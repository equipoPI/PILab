//componentes
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LabCard from "../components/LabCards";
import HerCard from "../components/HerCards";
import AulCard from "../components/AulCards";
import Grid from "@mui/material/Grid";

//librerias y funciones
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getALLHer, getALLLab, getALLAul } from "../API/Methods";


export default function Home() {
  const [Laboratorio, setLaboratorio] = useState([])

  useEffect(() => {
    async function loadLab() {
      const res = await getALLLab();
      setLaboratorio(res.data);
    }
    loadLab();
  }, []);

  const [Herramientas, setHerramientas] = useState([])

  useEffect(() => {
    async function loadHer() {
      const res = await getALLHer();
      setHerramientas(res.data);
    }
    loadHer();
  }, []);

  const [Aulas, setAulas] = useState([])

  useEffect(() => {
    async function loadAul() {
      const res = await getALLAul();
      setAulas(res.data);
    }
    loadAul();
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        {Laboratorio.map((Laboratorio) => (
          <LabCard key={Laboratorio.id} Laboratorio={Laboratorio} />
        ))}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {Herramientas.map((Herramientas) => (
          <HerCard key={Herramientas.id} Herramientas={Herramientas} />
        ))}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {Aulas.map((Aulas) => (
          <AulCard key={Aulas.id} Aulas={Aulas} />
        ))}
      </Grid>
    </Grid>
  );
};