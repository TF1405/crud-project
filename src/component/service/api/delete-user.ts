import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const fetcher = async ( id: number ) => {
    return await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.data)
}

export const useDeleteUser = () => {
    return useMutation({mutationFn: fetcher})
}