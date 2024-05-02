import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { UserDetailPage } from "./component/pages/user-detail-pages";
import withEditUser from "./component/features/edit-user";
import withAddUser from "./component/features/add-user";

const EditUserPage = withEditUser(UserDetailPage)
const AddUserPage = withAddUser(UserDetailPage)

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path:'/:id',
        element: <EditUserPage/>
    },
    {
        path:'/add',
        element: <AddUserPage/>
    }
])