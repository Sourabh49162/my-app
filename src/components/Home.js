import React, { useEffect } from "react";
import { Container, Jumbotron, Button } from "reactstrap"


const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])
    return (
        <Jumbotron className="text-center">
            <h1 className="display-3">Header</h1>
            <p>SubHeading</p>
            <Container >
                <Button color="primary" outline>
                    Start Using
            </Button>
            </Container>
        </Jumbotron>
    );
};


export default Home;