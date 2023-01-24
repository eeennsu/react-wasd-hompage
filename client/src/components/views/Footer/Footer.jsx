import React, { useMemo }	 from 'react';
import { MDBFooter, MDBTypography, MDBIcon, MDBRow, MDBCol  } from 'mdb-react-ui-kit';
import logo_mjc  		 from '../../styled/eunsu/imgs/logo_mjc3.png';
import logo_wasd 		 from '../../styled/eunsu/imgs/wasdlogo.png';
import logo_wasd_large 		 from '../../styled/eunsu/imgs/wasdlogo_large.png';
import { Popover } from 'antd';

const Footer = () => {

	const popoverLogo = useMemo(() => {
		return <img src={logo_wasd_large} alt='logo' id='logo_wasd' />;
	}, []);
	
	return (
		// 예시 스타일
		<MDBFooter id='footer'>		
			<div id='top' className='d-md-flex justify-content-center align-items-center p-1'>
				<div className='d-none d-lg-block'>
					<Popover title='WASD Logo' content={popoverLogo}>
						<img src={logo_wasd} alt='logo' id='logo_wasd' />
					</Popover>					
				</div>
				<div id='addr_num'>
					<div className='infos row d-flex'>
						<div className='col-2 w-auto'>
							<MDBIcon fas icon="map-marker-alt" />&nbsp;&nbsp; 주소
						</div>	
						<div className='col-10'>
							서울특별시 서대문구 가좌로 134(서울특별시 서대문구 홍은 2동 356-1) 공학관 318호
						</div>					
					</div>	
					<div className='infos row'>
						<div className='col-2 w-auto'>
						<MDBIcon fas icon="phone" />&nbsp; 전화
						</div>
						<div className='col-10'>
							(02)300-1000,1114 FAX (02)304-4832
						</div>					
					</div>						
				</div>								
			</div>					
			<div id='middle' className='pb-1 text-center border-bottom '>
				<span className='font_Montserra'><MDBIcon far icon="copyright" />&nbsp; 2023 Copyright WASD all rights reserved.</span>
			</div>
			<div id='bottom' className='d-flex pt-1 justify-content-between text-white px-3'>			
				<MDBTypography listUnStyled className='list'>
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
};

export default Footer;