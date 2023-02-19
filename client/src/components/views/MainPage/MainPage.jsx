import React from 'react';
import { ParentDiv } from '../../styled/eunsu/StyledComponent';
import styles from '../../styled/yongtae/_mainPage.scss';
import styled from "styled-components";

const MainPage = () => {
	
	return (
		// 예시 스타일
		<ParentDiv>
        <div className='relative'>
	     <div className='mainpage_section'>

            <div className='text'>
			<h>Web</h><br/>
			<h>App</h><br/>
			<h>Server</h><br/>
			<h>Desgin</h><br/>
			</div>

			<div className='absolute'>
		     <img className='img' src={process.env.PUBLIC_URL + '/img/MainPage_img.png'}>
			 </img>
		    </div>
		 </div>
		</div>



		</ParentDiv>		
	);
};

export default 	MainPage;