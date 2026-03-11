import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    let [sel, setSel] = useState<boolean>(false);
    let [name, setName] = useState<string>("Your Name");
    let [stu, setStu] = useState<boolean>(true);
    function upSel() {
        setSel(!sel);
    }
    function upStu() {
        setStu(!stu);
    }
    function upName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="mode"
                label="selectMode"
                checked={sel}
                onChange={upSel}
            />
            <h3>Edit Mode is {sel ? "on" : "off"}</h3>
            <h3>
                {name} is {stu ? "" : "not"} a student
            </h3>
            {sel && (
                <>
                    <Form.Control type="text" value={name} onChange={upName} />
                    <Form.Check
                        type="checkbox"
                        id="studdy"
                        label="Change Student Status"
                        checked={stu}
                        onChange={upStu}
                    />
                </>
            )}
        </div>
    );
}
