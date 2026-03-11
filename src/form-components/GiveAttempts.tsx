import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    let [att, SetAtt] = useState<number>(3);
    let [req, SetReq] = useState<string>("");
    let re = parseInt(req) || 0;
    function takeAtt() {
        SetAtt(att - 1);
    }
    function gainAtt() {
        SetAtt(att + re);
    }

    return (
        <div>
            <h3>Current att left: {att}</h3>
            <Form.Group controlId="reqAtt">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={req}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        SetReq(event.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={takeAtt} disabled={att <= 0}>
                use
            </Button>
            <Button onClick={gainAtt}>gain</Button>
            <h3>Give Attempts</h3>
        </div>
    );
}
