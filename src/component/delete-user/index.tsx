import { Button, Modal } from "antd"
import { FC } from "react"
import { useDeleteUser } from "../service/api/delete-user"
import { useUserStore } from "../service/store/user"
import { DeleteFilled } from "@ant-design/icons"

const DeleteUser: FC<{id: number}> = ({id}) => {
    const {mutate} = useDeleteUser()
    const {setUsers, users} = useUserStore()
    return (
        <Button 
        style={{backgroundColor:'red', color:'white'}} 
        onClick={() => {
            Modal.confirm({
                title:'Heads up!',
                content: 'Are you sure want to delete this user?',
                onOk: () => {
                    mutate(id, {
                        onSuccess: () => {
                            setUsers(users.filter((user) => user.id !== id))
                        }
                    })
                }
            })
        }}
        >
        <DeleteFilled/>
        Delete
        </Button>
    )
}

export default DeleteUser