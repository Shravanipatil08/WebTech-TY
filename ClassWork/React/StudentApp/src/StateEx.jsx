import { Component, useState } from "react";

function StateEx(props) {
    // const fname = props.fname || "Shraa !";
    // const age = props.age || 25;
    // const course = props.course || "ReactJS";
    return (
        <div>
            <h1>{props.fname}</h1>
            <h1>{props.age}</h1>
            <h1>{props.course}</h1>
        </div>
    );
}
export default StateEx;