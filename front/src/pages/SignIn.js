import React from 'react';

import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from 'react';

//iconos
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { NavLink } from "react-router-dom";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState({
        error: false,
        message: "",
    });

    const emailValidation = (email) => {
        // expresion regular para validar email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!emailValidation(email)) {
            setError({
                error: true,
                message: "El email no es valido",
            });
            return;
        }
        console.log(email);
        setError({
            error: false,
            message: "",
        });
    };

    return (
        <>
            <Container maxWidth="xs" sx={{ bgcolor: 'background.paper', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, mt: 2, }}>
                <Box sx={{ textAlign: 'center' }} component="form" onSubmit={onSubmit} autoComplete="off">
                    <Avatar sx={{ bgcolor: 'secondary.main', width: 50, height: 50, margin: '0 auto', }}>
                        <LockOutlinedIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="h4" align="center" mt={2}>
                        Sign up
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label="First Name"
                                fullWidth
                                margin="normal"
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Last Name"
                                fullWidth
                                margin="normal"
                                required
                            />
                        </Grid>
                    </Grid>

                    <TextField
                        label="Email Address"
                        type="email"
                        fullWidth
                        margin="normal"
                        required
                        error={error.error}
                        helperText={error.message}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} >
                        Sign up
                    </Button>
                    <Typography variant="body2" align="center" mt={2}>
                        <Link component={NavLink} to="/Login">Already have an account? Log in</Link>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}