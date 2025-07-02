export type UserRole = "user" | "operation" | "technical" | "admin";

export interface AuthUser {
  username: string;
  role: UserRole;
}

export interface UserWithPassword extends AuthUser {
  password: string;
}

export const USERS: UserWithPassword[] = [
  { username: "user", password: "user123", role: "user" },
  { username: "operation", password: "operation123", role: "operation" },
  { username: "technical", password: "technical123", role: "technical" },
  { username: "admin", password: "admin123", role: "admin" },
]; 