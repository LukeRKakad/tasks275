import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    let [emoji, setEmoji] = useState<string>("🗽");
    //alpha 🗽🎁🥚🎃🦃
    //time 🥚🗽🎃🦃🎁
    function alpha(e: string) {
        if (e === "🗽") {
            return "🎁";
        }
        if (e === "🎁") {
            return "🥚";
        }
        if (e === "🥚") {
            return "🎃";
        }
        if (e === "🎃") {
            return "🦃";
        }
        return "🗽";
    }
    function time(e: string) {
        if (e === "🥚") {
            return "🗽";
        }
        if (e === "🗽") {
            return "🎃";
        }
        if (e === "🎃") {
            return "🦃";
        }
        if (e === "🦃") {
            return "🎁";
        }
        return "🥚";
    }

    return (
        <div>
            Cycle Holiday
            <div>Current Holiday: {emoji}</div>
            <Button
                onClick={() => {
                    setEmoji(alpha(emoji));
                }}
            >
                Change by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setEmoji(time(emoji));
                }}
            >
                Change by Time of Year
            </Button>
        </div>
    );
}
