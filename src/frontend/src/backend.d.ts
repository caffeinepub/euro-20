import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StreakData {
    lastCompletionDate: bigint;
    bestStreak: bigint;
    currentStreak: bigint;
}
export interface UpdateResult {
    lastCompletionDate: bigint;
    message: string;
    bestStreak: bigint;
    newStreak: bigint;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserRole(): Promise<UserRole>;
    getStreakData(user: Principal): Promise<StreakData>;
    isCallerAdmin(): Promise<boolean>;
    recordDayCompletion(localDate: bigint): Promise<UpdateResult>;
    recordDayCompletionForUser(user: Principal, localDate: bigint): Promise<UpdateResult>;
}
