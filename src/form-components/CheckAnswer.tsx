import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    let [ans, setAns] = useState<string>("");
    let [emo, setEmo] = useState<string>("❌");
    function upAns(event: React.ChangeEvent<HTMLInputElement>) {
        let x = event.target.value;
        setAns(x);
        if (x !== expectedAnswer) {
            setEmo("❌");
        } else {
            setEmo("✔️");
        }
    }
    return (
        <div>
            <Form.Group controlId="answer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control type="text" value={ans} onChange={upAns} />
            </Form.Group>
            <div>
                <h3>{emo}</h3>
            </div>
        </div>
    );
}
