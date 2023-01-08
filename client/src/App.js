import React      from 'react';
import Main       from './components/Main/Main';
import Intro      from './components/Intro/Intro';
import Active     from './components/views/Active/Active';
import Contest    from './components/Contest/Contest';
import Navbar     from './components/Navbar/Navbar';
import Footer     from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
          <Navbar />                                                  {/* 네비게이션 바  */}
          <Routes>
            <Route exact path='/' element={<Main />}/>                {/*  메인 페이지   */}
            <Route path='/intro' element={<Intro />}/>                {/*  소개 페이지   */}
            <Route path='/active' element={<Active />}/>              {/*  활동 페이지   */}
            <Route path='/contest' element={<Contest />}/>            {/*  공모전 페이지 */}
          </Routes>   
          <Footer />                                                  {/*  홈페이지 정보 */}
        </BrowserRouter>
    );
}

export default App;
