import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    let [viz, setViz] = useState<boolean>(false);

    function fliperuski(): void {
        setViz(!viz);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    fliperuski();
                }}
            >
                Reveal Answer
            </Button>
            {viz && <div>42</div>}
        </div>
    );
}
