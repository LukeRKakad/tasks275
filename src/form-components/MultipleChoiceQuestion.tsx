import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    let [jawn, setJawn] = useState<string>(options[0]);
    function newJawn(event: React.ChangeEvent<HTMLSelectElement>) {
        setJawn(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="ansers">
                <Form.Label>Choose right answer</Form.Label>
                <Form.Select value={jawn} onChange={newJawn}>
                    {options.map((ans: string) => (
                        <option key={ans} value={ans}>
                            {ans}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <h3>Answer is: {jawn === expectedAnswer ? "✔️" : "❌"}</h3>
        </div>
    );
}
