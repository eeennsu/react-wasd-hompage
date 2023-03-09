import './App.scss';
import React      	    from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage       	from './components/views/MainPage/MainPage';
import IntroPage 		from './components/views/IntroPage/IntroPage';
import ActivePage     	from './components/views/ActivePage/ActivePage';
import ContestPage    	from './components/views/ContestPage/ContestPage';
import ManagerPage 	 	from './components/views/ManagerPage/ManagerPage';
import Navbar     	 	from './components/views/Navbar/Navbar';
import Footer     	 	from './components/views/Footer/Footer';

function App() {

    return (
        <BrowserRouter>
			<Navbar />                                              		      {/* 네비게이션 바  */}		
				<Routes>
					<Route exact path='/' element={<MainPage />}/>                {/*  메인 페이지   */}
					<Route path='/intro' element={<IntroPage />}/>                {/*  소개 페이지   */}
					<Route path='/active' element={<ActivePage />}/>              {/*  활동 페이지   */}
					<Route path='/contest' element={<ContestPage />}/>        {/*  공모전 페이지 */}
					<Route path='/manager' element={<ManagerPage />}/> 			  {/*  관리자 페이지 */}
				</Routes>  		
			<Footer />                                                 			  {/*  홈페이지 정보 */}
        </BrowserRouter>
    );
}

export default App;