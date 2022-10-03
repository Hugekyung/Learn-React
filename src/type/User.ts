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

export interface IUserList {
    users: IUser[];
    onRemove: Function;
    onToggle: Function;
}
