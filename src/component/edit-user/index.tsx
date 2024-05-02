import { Button } from "antd"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { DataType } from "../TableUser"
import { EditFilled } from "@ant-design/icons"

const EditUser: FC <DataType>= (props) => {
    const navigate = useNavigate()
    return (
        <Button 
        onClick={() => navigate(`/${props.id}`, {state: props})} 
        style={{marginRight:'0.5rem', 
        color:'white', 
        backgroundColor:'green'}}
        >
        <EditFilled/>
        Edit
        </Button>
    )
}

export default EditUser