import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { DataType } from "../../TableUser"

const fetcher = async (payload:Omit<DataType, 'id'>) => {
    return await axios.post(`https://jsonplaceholder.typicode.com/users`, payload).then(res => res.data)
}

export const useAddUser = () => {
    return useMutation({mutationFn: fetcher})
}