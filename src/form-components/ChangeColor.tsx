import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    let [sel, setSel] = useState<string>("red");
    function Color(event: React.ChangeEvent<HTMLInputElement>) {
        setSel(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="radio"
                name="colours"
                onChange={Color}
                id="colorRed"
                label="Red"
                value="red"
                checked={sel === "red"}
            />

            <Form.Check
                type="radio"
                name="colours"
                onChange={Color}
                id="colorBlue"
                label="Blue"
                value="blue"
                checked={sel === "blue"}
            />

            <Form.Check
                type="radio"
                name="colours"
                onChange={Color}
                id="colorGreen"
                label="Green"
                value="green"
                checked={sel === "green"}
            />

            <Form.Check
                type="radio"
                name="colours"
                onChange={Color}
                id="colorOrange"
                label="Orange"
                value="orange"
                checked={sel === "orange"}
            />

            <Form.Check
                type="radio"
                name="colours"
                onChange={Color}
                id="colorWhite"
                label="White"
                value="white"
                checked={sel === "white"}
            />

            <Form.Check
                type="radio"
                name="colours"
                onChange={Color}
                id="colorBlack"
                label="Black"
                value="black"
                checked={sel === "black"}
            />

            <Form.Check
                type="radio"
                name="colours"
                onChange={Color}
                id="colorPurple"
                label="Purple"
                value="purple"
                checked={sel === "purple"}
            />

            <Form.Check
                type="radio"
                name="colours"
                onChange={Color}
                id="colorYellos"
                label="Yellow"
                value="yellow"
                checked={sel === "yellow"}
            />
            <h3>Change Color</h3>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: sel,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px",
                }}
            >
                Current Color: {sel}
            </div>
        </div>
    );
}
