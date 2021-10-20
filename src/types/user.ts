export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS'
}
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

export type UserAction = FetchUsersAction
