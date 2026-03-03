import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
interface ColorProps {
    setColor: (colo: number) => void;
    col: number;
}

function ChangeColor({ col, setColor }: ColorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColor((1 + col) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ col }: ColorProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[col],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[0]}</span>
            <div>
                <ChangeColor
                    setColor={setColorIndex}
                    col={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setColor={setColorIndex}
                    col={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
