import { FC } from "react"
import { Table, Button } from "antd"
import columns from "./TableUser"
import { useGetUser } from "./service/api/get-user"
import { PlusOutlined } from "@ant-design/icons"


const DataList: FC = () => {
    const {UserList} = useGetUser()

    return (
        <>
            <Button type="primary" onClick={() => {window.location.href='/add'}}>
                <PlusOutlined/>
                Add User
            </Button>
            <div>
                <Table columns={columns} dataSource={UserList?.map(({id, name, username, email}) => (
                {
                    key:id, 
                    id,
                    name:name, 
                    email:email, 
                    username:username
                }
            ))}/></div>
        </>
    )
}

export default DataList