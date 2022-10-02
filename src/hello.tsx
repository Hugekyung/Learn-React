import React from "react";
import { HelloNameType } from "type/hello";

function Hello(props: HelloNameType) {
    const defaultName = "익명의 사용자";
    return <div>안녕하세요, {props.name ?? defaultName}</div>;
}

export default Hello;
