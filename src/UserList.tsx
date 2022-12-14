import React, { useEffect } from "react";
import { IUser, IUserList } from "type/User";

function User({ user, onRemove, onToggle }: IUser) {
    useEffect(() => {
        console.log("user 값이 설정됨");
        console.log(user);
        return () => {
            console.log("user 가 바뀌기 전..");
            console.log(user);
        };
    }, [user]);
    return (
        <div>
            <b
                style={{
                    cursor: "pointer",
                    color: user.active ? "green" : "black",
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }: IUserList) {
    return (
        <div>
            {users.map((user) => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    id={undefined}
                />
            ))}
        </div>
    );
}

export default UserList;
