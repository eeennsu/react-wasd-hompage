import { MDBIcon } from 'mdb-react-ui-kit';
import { Button, Form, Input, Typography } from 'antd';
import React, { useCallback } from 'react';

const { Item } 	= Form;
const { Title } = Typography;

const App = () => {

	const onFinish = useCallback((values) => {
		console.log(values);
	}, []);

	return (
		<div id='form_parent' className='d-flex justify-content-center align-items-center'>
			<Form name='normal_login' className='login-form' initialValues={{ remember: true }}	onFinish={onFinish} > 
				<Item name='ManagerID' rules={[{ required: true, message: 'Input Manager ID' }]}>
					<Input prefix={<MDBIcon fas icon='user-alt' />} placeholder='Manager ID' />
				</Item>
				<Item name='ManagerPassword' rules={[{ required: true, message: 'Input Manager Password' }]} >
					<Input prefix={<MDBIcon fas icon='unlock-alt' />} type='password' placeholder='Manager Password' />	
				</Item>
				<Item className='text-center'>
					<Button type='primary' htmlType='submit' className='login-form-button'>
						Log	in
					</Button>			
				</Item>
			</Form>
		</div>	
	);
};

export default App;