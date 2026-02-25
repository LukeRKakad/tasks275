import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    let [tip, setTip] = useState<QuestionType>("short_answer_question");
    let [tippy, setTippy] = useState<String>("Short Answer");
    function changeType() {
        if (tip === "short_answer_question") {
            setTip("multiple_choice_question");
            setTippy("Multiple Choice");
        } else {
            setTip("short_answer_question");
            setTippy("Short Answer");
        }
    }

    return (
        <div>
            <Button
                onClick={() => {
                    changeType();
                }}
            >
                Change Type
            </Button>
            <div>{tippy}</div>
        </div>
    );
}
