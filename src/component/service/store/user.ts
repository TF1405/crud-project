import { create } from "zustand";
import { User } from "../api/get-user";

interface UserState {
    users: User[]
}

interface UserAction {
    setUsers: (payload: User[]) => void
}

type UserStore = UserState & UserAction

export const useUserStore = create<UserStore>((set) => ({
    users: [],

    setUsers: (payload: User[]) => set({users: payload})
}))
