import React	 		      from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import logo_wasd 		 	  from '../../styled/eunsu/imgs/wasdlogo.png';
import logo_wasd_large 		  from '../../styled/eunsu/imgs/wasdlogo_large.png';
import { Popover } 			  from 'antd';

const Footer = () => {

	return (
		<MDBFooter className='footer'>		
			<div className='top d-md-flex justify-content-center align-items-center'>
				<div className='d-none d-lg-block'>
					<Popover title='WASD Logo' content={<img src={logo_wasd_large} alt='logo' />}>
						<img src={logo_wasd} alt='git reset HEAD
						logo' className='logo_wasd' />
					</Popover>					
				</div>
				<div className='addr_num p-2 p-md-0'>
					<div className='infos d-flex row'>
						<div className='col-2 w-auto'>
							<MDBIcon fas icon="map-marker-alt" />&nbsp;&nbsp; 주소
						</div>	
						<div className='col-10'>
							서울특별시 서대문구 가좌로 134(서울특별시 서대문구 홍은 2동 356-1) 공학관 318호
						</div>					
					</div>	
					<div className='infos d-flex row'>
						<div className='col-2 w-auto'>
							<MDBIcon fas icon="phone" />&nbsp; 전화
						</div>
						<div className='col-10'>
							(02)300-1000,1114 FAX (02)304-4832
						</div>					
					</div>						
				</div>								
			</div>					
			<div className='middle pb-1 d-flex justify-content-center'>
				<span className='font_Montserra'><MDBIcon far icon="copyright" />&nbsp; 2023 Copyright WASD all rights reserved.</span>
			</div>
			<div className='bottom mt-3'>			
				<ul className='d-flex row w-100 list-unstyled justify-content-around text-center'>
					<div className='col-md-2 col-4'>
						<a href='https://www.mjc.ac.kr/mjcIntro.do'>명지전문대</a>
					</div>				
					<div className='col-md-2 col-4'>
						<a href='https://divb.mjc.ac.kr/'>명지전문대 도서관</a>
					</div> 	
					<div className='col-md-2 col-4'>	
						<a href='https://cyber.mjc.ac.kr/'>E-class</a>
					</div>					
					<div className='col-md-2 col-4'>
						<a href='https://icampus.mjc.ac.kr/mjc/sysUser/doView.do'>I-CAMPUS</a>
					</div>			
					<div className='col-md-2 col-4'>
						<a href='https://cafe.naver.com/swcontent'>소프트웨어콘텐츠과</a>
					</div>					 					
					<div className='col-md-2 col-4'>
						<a href='http://mjcs.mjc.ac.kr/mjcIndex.do'>컴퓨터공학과</a>
					</div>
				</ul>							    
			</div>
		</MDBFooter>
	);
};

export default Footer;