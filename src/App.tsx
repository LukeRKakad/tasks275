import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import john from "./assets/mud john boy.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <img src={john} alt="MAN YOU MISSING OUT ON JOHN THE GOAT" />
            <h1 id="mum">UR mum</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p style={{ backgroundColor: "red" }}>
                LUKE KAKAD RAAAAAAAAAAAAAAAAAAAAAAA
            </p>
            <p>Hello World</p>
            <p>top 3 ways to describe the grinch</p>
            <ul>
                <li>Stink</li>
                <li>Stank</li>
                <li>Stunk</li>
            </ul>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div id="col1"></div>
                    </Col>
                    <Col>
                        <div id="col2"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
