import { ComponentProps, ComponentType } from "react"
import { UserDetailPage } from "../pages/user-detail-pages"
import { useAddUser } from "../service/api/add-user"
import { useUserStore } from "../service/store/user"

type DetailPageProps = ComponentProps<typeof UserDetailPage>

const withAddUser = (WrappedComponent: ComponentType<DetailPageProps>) => {
    
    const newComponent = (props: ComponentProps<typeof WrappedComponent>) => {
        const {mutate} = useAddUser()

        const {setUsers, users} = useUserStore()
        const onSubmit = (values:any) => {
            mutate(values, {onSuccess: (response) => {
                setUsers([...users, response])
            }})
            
        }

        return<WrappedComponent {...props} onSubmit={onSubmit}/>
    }
    return newComponent
}

export default withAddUser