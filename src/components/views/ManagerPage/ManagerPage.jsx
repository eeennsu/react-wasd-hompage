import { MDBIcon } from 'mdb-react-ui-kit';
import { Button, Input as antdInput, Form as antdForm } from 'antd';
import React from 'react';
import { ParentDiv } from '../../styled/eunsu/StyledComponent';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Form = styled(antdForm)`
	width: 785px;
	height: 471px;
	padding: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	border-radius: 10px;
`;

const LeftBox = styled.div`
	border-right: 1px solid black;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UserInfos = styled.div`
	display: flex;
	flex-direction: column;
`;

const RightBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Label = styled.label`
	width: 307px;	
	margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;

const TagName = styled.span`
	font-size: 35px;
	margin-right: 15px;
	font-weight: 500;
`;

const Input = styled.input`
	width: 70%;
	outline: none;
	border: none;
	background-color: transparent;
	font-size: 35px;
	color: black;

	&:-webkit-autofill,
  	&:-webkit-autofill:hover,
  	&:-webkit-autofill:focus,
  	&:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
		-webkit-transition: background-color 9999s ease-out;
		-webkit-box-shadow: 0 0 0px 1000px white inset !important;
		box-shadow: 0 0 0px white inset !important;
		-webkit-text-fill-color: black !important;
		font-size: 35px;
  	}
`;

const InputBox = styled.div`
	width: 100%;
	border-bottom: 1px solid black;	
	padding: 0;
	margin: 0;
	height: 55px;
`;

const ErrorMsg = styled.p`	
	height: 10px;	
	padding: 5px;

	span {
		color: red;
		font-size: 14px;
		font-weight: bold;
	}
`;

const Login = styled.button`
	width: 300px;
	height: 49px;
	background-color: #9DC78E;
	border-radius: 10px;
	border: none;
	font-weight: bolder;	
	color: black;
	font-family: Noto;
	font-size: 20px;
	transition: 0.2s ease-in-out;

	&:hover {
		background-color: #b4e0a4;
	}
`;

const ManagerPage = () => {

	const { register, handleSubmit, formState: { errors } } = useForm({
		shouldFocusError: true,
	});

	const onSubmit = (data) => {
		console.log(JSON.stringify(data));
	};

	return (
		<ParentDiv flex justifyCenter alignCenter>
			<Container>
				<Form onFinish={handleSubmit(onSubmit)}>
					<LeftBox>	
						<UserInfos>
							<Label mb={26}>
								<InputBox>
									<TagName>ID</TagName>
									<Input type='text' {...register('id', { required: true })}/>
								</InputBox>
								<ErrorMsg>
									{
										errors.id?.type === 'required' && <span>ID is required</span>
									}	
								</ErrorMsg>											
							</Label>								
							<Label>
								<InputBox>
									<TagName>PW</TagName>
									<Input type='password' {...register('pw', { required: true })}/>
								</InputBox>	
								<ErrorMsg>
									{
										errors.pw?.type === 'required' && <span>Password is required</span>
									}
								</ErrorMsg>								
							</Label>
						</UserInfos>				
					</LeftBox>
					<RightBox>
						<Login>
							로그인
						</Login>
					</RightBox>
				</Form>
			</Container>
		</ParentDiv>		
	);
};

export default ManagerPage;