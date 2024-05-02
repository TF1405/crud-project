import { ComponentProps } from "react"
import { UserDetailPage } from "../pages/user-detail-pages"
import { useLocation } from "react-router-dom"
import { DataType } from "../TableUser"
import { useEditUser } from "../service/api/edit-user"
import { useUserStore } from "../service/store/user"

type DetailPageProps = ComponentProps<typeof UserDetailPage>

const withEditUser = (WrappedComponent: ComponentType<DetailPageProps>) => {
    
    const newComponent = (props: ComponentProps<typeof WrappedComponent>) => {
        const {mutate} = useEditUser()

        const {setUsers, users} = useUserStore()
        const location = useLocation()
        const state = location.state as DataType

        const onSubmit = (values:any) => {
            mutate({...values, id:state.id}, {onSuccess: (response) => {
                setUsers([...users, response])
            }})
        }

        // console.log(state);


        return<WrappedComponent {...props} initialValues={state} onSubmit={onSubmit}/>
    }
    return newComponent
}

export default withEditUser