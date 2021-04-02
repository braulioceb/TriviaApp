import React from "react";
import { Card } from "../organisms/Card";

const counterStyle = {
    backgroundColor: "#D9EAF8",
    margin: "58px",
    padding: "35px",
    borderRadius: "15px",
};

const buttonStyle = {
    margin: "10px",
    fontSize: "20px",
};


export const Trivia = () => {
    return (
        <React.Fragment>
            <div>
                <p style={counterStyle}>COUNTER: 0/10</p>
                <Card />
                <div>
                    <button style={buttonStyle} >Previous</button>
                    <button style={buttonStyle}>Answer</button>
                    <button style={buttonStyle}>Next</button>
                </div>
            </div>
        </React.Fragment>
    );
};




