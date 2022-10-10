import { Key } from "react";

export interface IUser {
    id: Key | null | undefined;
    user: {
        id: number;
        email: string;
        username: string;
        active: string;
    };
    onRemove: Function;
    onToggle: Function;
}

export interface IUser2 {
    id: number;
    email: string;
    username: string;
    active: string;
}

export interface IUserList {
    users: IUser2[];
    onRemove: Function;
    onToggle: Function;
}
