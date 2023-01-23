import React, { memo }	 from 'react';
import { MDBFooter, MDBTypography, MDBIcon  } from 'mdb-react-ui-kit';
import logo_mjc  		 from '../../styled/eunsu/logo_mjc3.png';

const Footer = memo(() => {
	
	return (
		// 예시 스타일
		<MDBFooter id='footer'>		
			<div id='top' className='d-md-flex justify-content-lg-around align-items-center text-center p-2 p-md-3 text-white'>
				<div className='d-none d-lg-block'>	
					<img src='' alt='logo'/>
				</div>
				<div>
					<span className='infos'>
						<MDBIcon fas icon="map-marker-alt" /> 
						&nbsp; 서울특별시 서대문구 가좌로 134(서울특별시 서대문구 홍은 2동 356-1) 공학관 318호
					</span>
					<br />
					<span className='infos'>
						<MDBIcon fas icon="phone" />
						&nbsp; 대표전화 (02)300-1000,1114 FAX (02)304-4832
					</span>					
				</div>				
			</div>					
			<div id='middle' className='pb-1 text-center border-bottom '>
				<span className='font_Montserra'><MDBIcon far icon="copyright" />&nbsp; 2023 Copyright WASD all rights reserved.</span>
			</div>
			<div id='bottom' className='d-flex pt-1 justify-content-between text-white px-3'>					
				<MDBTypography listUnStyled className='list' >
					<li>
						<a href='https://www.mjc.ac.kr/mjcIntro.do'>명지전문대</a>
					</li>
					<br />
					<li>
						<a href='https://lib.mjc.ac.kr/'>명지전문대 도서관</a>
					</li> 										    
				</MDBTypography>
				<MDBTypography listUnStyled className='list'>
					<li>	
						<a href='https://cyber.mjc.ac.kr/'>E-class</a>
					</li>
					<br />
					<li>
						<a href='https://icampus.mjc.ac.kr/mjc/sysUser/doView.do'>I-CAMPUS</a>
					</li>				     
				</MDBTypography>
				<MDBTypography listUnStyled className='list'>
					<li>
						<a href='https://cafe.naver.com/swcontent'>소프트웨어 콘텐츠과</a>
					</li>
					<br />  					
					<li>
						<a href='http://mjcs.mjc.ac.kr/mjcIndex.do'>컴퓨터 공학과</a>
					</li>				     
				</MDBTypography>
			</div>
		</MDBFooter>
	);
});

export default Footer;