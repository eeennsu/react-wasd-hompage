import React from 'react';
import '../../styled/soyeon/_navber.scss';



const Navbar = () => {
	return (
		// 예시 스타일

		
		<nav style={{ height: '11vh', backgroundColor:'#9DC78E', width: '1852px', margin : '0 auto'}}>

			    <div className='box'/>
			
                <div className='line_top'>
				<div className='circle_top'/>
				</div>
				<div className='line'/>
                <div className='line_bottom'>
                <div className='circle_bottom'/>
				</div>

			    <div className='nav'>
				<a href='/'>WASD</a><br/>
				</div>
                
				{/* float: right으로 설정해놔서 순서 수정 */}

				<div className='in'>
				<a href='/manager'>Manager</a>
				</div>
				<div className='in'>
				<a href='/contest'>Contest</a><br/>
				</div>
				<div className='in'>
				<a href='/active'>Activity</a><br/>
				</div>
				<div className='in'>
				<a href='/intro'>Introduction</a><br/>
				</div>
				
				
		</nav>


	);
};

export default Navbar;