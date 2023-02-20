import React from 'react';
import { ParentDiv } from '../../styled/eunsu/StyledComponent';
import styles from '../../styled/yongtae/_mainPage.scss';
import styled from "styled-components";

const MainPage = () => {
	
	return (
		// 예시 스타일
		<ParentDiv flex alignCenter >
        <div className='mainpage_section relative'>

			<div className='text'>
				<span>Web</span><br/>
				<span>App</span><br/>
				<span>Server</span><br/>
				<span>Desgin</span><br/>
			</div>

			<div className='img-box'>
			<img className='img' src={process.env.PUBLIC_URL + '/img/MainPage_img.png'}>
			</img>
			</div>
			</div>



		</ParentDiv>		
	);
};

export default 	MainPage;