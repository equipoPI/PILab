import Container from "@mui/material/Container";
import IntCard from "../components/Cards";



export default function Home() {
    return (
        <>
            <Container sx={{ bgcolor: "background.default", mt: 2, }}>
                <IntCard />
                <IntCard />
            </Container>
        </>
    )
}