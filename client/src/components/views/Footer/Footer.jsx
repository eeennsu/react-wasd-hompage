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
						<img src={logo_wasd} alt='logo' className='logo_wasd' />
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
				<ul className='d-flex w-100 list-unstyled justify-content-around'>
					<li>
						<a href='https://www.mjc.ac.kr/mjcIntro.do'>명지전문대</a>
					</li>				
					<li>
						<a href='https://lib.mjc.ac.kr/'>명지전문대 도서관</a>
					</li> 	
					<li>	
						<a href='https://cyber.mjc.ac.kr/'>E-class</a>
					</li>					
					<li>
						<a href='https://icampus.mjc.ac.kr/mjc/sysUser/doView.do'>I-CAMPUS</a>
					</li>			
					<li>
						<a href='https://cafe.naver.com/swcontent'>소프트웨어 콘텐츠과</a>
					</li>					 					
					<li>
						<a href='http://mjcs.mjc.ac.kr/mjcIndex.do'>컴퓨터 공학과</a>
					</li>
				</ul>							    
			</div>
		</MDBFooter>
	);
};

export default Footer;