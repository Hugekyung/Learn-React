import * as React from "react";

interface ShowNameProps {
    name: string;
}

const ShowName = ({ name }: ShowNameProps) => {
    return (
        <div>
            내 이름은 <b>{name}</b>
        </div>
    );
};

export default ShowName;
