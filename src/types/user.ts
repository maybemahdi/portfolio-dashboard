export interface IUser {
    id: string;
    name: string;
    email: string;
    isActive?: boolean;
    role: "user" | "admin";
    iat?: number;
    exp?: number;
  }