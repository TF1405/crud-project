import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useUserStore } from "../store/user";

export interface User {
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "address": {
        "street": string;
        "suite": string;
        "city": string;
        "zipcode": string;
        "geo": {
        "lat": string;
        "lng": string;
        }
    },  
    "phone": string;
    "website": string;
    "company": {
        "name": string;
        "catchPhrase": string;
        "bs": string;
    }
}

const fetcher = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
}

export const useGetUser = () => {
    const {setUsers, users} = useUserStore()

    const result = useQuery<User[]>({queryKey: ['user-list'], queryFn: fetcher})

    useEffect(() => {
        if(result.data) setUsers(result.data)
    }, [result.data])

    return {...result, UserList: users}
}