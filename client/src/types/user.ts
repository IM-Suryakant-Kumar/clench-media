export interface ILUser {
    email: string;
    password: string; 
}

export interface IRUser extends ILUser {
    name: string
}

export type User = {
    name: string;
    email: string;
}