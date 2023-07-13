//importaciones de componentes
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'; 
import Button from "@mui/material/Button";

//Card hecha a mano sin usar el componente que nos da material UI

const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  
  export default function Product() {
    return (
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
        }}>
        <Img
          src="https://via.placeholder.com/200"
          alt="random"
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">Product Name</Typography>
          <p>Product Description</p>
          <Button variant="contained">Add cart</Button>
        </Box>
        <Box
          component="p"
          sx={{ mr: 2 }}
        >
          $19.99
        </Box>
      </Paper>
    );
  }