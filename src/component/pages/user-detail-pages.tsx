import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type FieldType = {
    name?: string;
    username?: string;
    email?: string;
    };

export const UserDetailPage:FC<{onSubmit?: (values: FieldType) => void, initialValues?:object}> = ({onSubmit, initialValues}) => {
    const navigate = useNavigate()
    
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        // console.log('Success:', values);
        if (onSubmit) onSubmit(values)
        navigate("/")
    };
    
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 500 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={initialValues}
            >
            <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{marginRight: '1rem'}}>
            Save
            </Button>
            <Button type="default" htmlType='button' onClick={() => {window.location.href='/'}}>
            Cancel
            </Button>
            </Form.Item>
            </Form>
        </div>
    )
}