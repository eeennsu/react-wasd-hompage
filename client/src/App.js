import React      from 'react';
import Main       from './components/views/MainPage/MainPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro      	 from './components/views/IntroPage/IntroPage';
import Active     	 from './components/views/ActivePage/ActivePage';
import Contest    	 from './components/views/ContestPage/ContestPage';
import Navbar     	 from './components/views/Navbar/Navbar';
import Footer     	 from './components/views/Footer/Footer';
import ManagerPage from './components/views/ManagerPage/ManagerPage';
import { ParantDiv } from './components/styled/eunsu/StyledComponent';

function App() {
    return (
        <BrowserRouter>
			<Navbar />                                                  {/* 네비게이션 바  */}
			<ParantDiv >
				<Routes>
					<Route exact path='/' element={<Main />}/>                {/*  메인 페이지   */}
					<Route path='/intro' element={<Intro />}/>                {/*  소개 페이지   */}
					<Route path='/active' element={<Active />}/>              {/*  활동 페이지   */}
					<Route path='/contest' element={<Contest />}/>            {/*  공모전 페이지 */}
					<Route path='/manager' element={<ManagerPage />}/> 			  {/*  관리자 페이지 */}
				</Routes>  
			</ParantDiv> 
			<Footer />                                                  {/*  홈페이지 정보 */}
        </BrowserRouter>
    );
}

export default App;
