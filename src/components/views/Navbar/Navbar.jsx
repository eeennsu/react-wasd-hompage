import React from 'react';
import '../../styled/soyeon/_navber.scss';



const Navbar = () => {
	return (
		// 예시 스타일

		
		<nav style={{ height: '11vh', backgroundColor:'#9DC78E', width: '100%', margin : '0 auto', borderRight: '22px solid #fff', borderLeft: '22px solid #fff'}}>

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
                
				<div className='in'>
				<a href='/intro'>Introduction</a><br/>
				</div>
				<div className='ac'>
				<a href='/active'>Activity</a><br/>
				</div>
				<div className='co'>
				<a href='/contest'>Contest</a><br/>
				</div>
				<div className='ma'>
				<a href='/manager'>Manager</a>
				</div>

			
				
				
		</nav>


	);
};

export default Navbar;