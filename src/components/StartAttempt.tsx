import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    let [stt, setAtt] = useState<number>(4);
    let [ip, setIp] = useState<boolean>(false);

    function takeAtt() {
        setAtt(stt - 1);
        setIp(true);
    }
    function stopAtt() {
        setIp(false);
    }
    function giveAtt() {
        setAtt(stt + 1);
    }

    return (
        <div>
            # of attempts: {stt}
            <div>
                <Button
                    onClick={() => {
                        takeAtt();
                    }}
                    disabled={!(!ip && stt > 0)}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        stopAtt();
                    }}
                    disabled={!ip}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => {
                        giveAtt();
                    }}
                    disabled={ip}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
