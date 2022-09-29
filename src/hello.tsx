import React from "react";
import { HelloNameType } from "type/hello";

function Hello(props: HelloNameType) {
    return <div>안녕하세요, {props.name}</div>;
}

export default Hello;
