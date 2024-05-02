import type { TableProps } from 'antd';
import EditUser from './edit-user';
import DeleteUser from './delete-user';

export interface DataType {
    id:number,
    name: string,
    username: string,
    email: string,
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: <th style={{fontSize:'1.5rem'}}>Name</th>,
        dataIndex: 'name',
        key: 'name',
        render: (value) => {
            return <span style={{fontWeight:'bold'}}>{value}</span>
            },
    },
    {
        title: <th style={{fontSize:'1.5rem'}}>Username</th>,
        dataIndex: 'username',
        key: 'username',

    },
    {
        title: <th style={{fontSize:'1.5rem'}}>Email</th>,
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: <th style={{fontSize:'1.5rem'}}>Action</th>,
        key: 'action',
        render: (value:DataType) => {
            return (
                <div>
                    <EditUser {...value}/>
                    <DeleteUser id={value.id}/>
                </div>
            )
        }
    },
]

export default columns


