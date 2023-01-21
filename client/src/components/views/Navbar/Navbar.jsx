import React from 'react';

const Navbar = () => {
	return (
		// 예시 스타일
		<nav style={{ display: 'flex', background: 'skyblue', width: '100%', position: 'fixed', height: '11vh' }}>
			<div style={{  }}>
				<a href='/'>MainPage</a><br/>
				<a href='/intro'>IntroPage</a><br/>
				<a href='/active'>ActivePage</a><br/>
				<a href='/contest'>ContestPage</a><br/>
				<a href='/manager'>ManagerPage</a>
			</div>
		</nav>
	);
};

export default Navbar;