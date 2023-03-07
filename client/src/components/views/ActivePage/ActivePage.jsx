import React, { useState, useEffect, useTransition } from 'react';
import axios from 'axios';
import dummy from './dummy';
import styled from 'styled-components';
import { ParantDiv, Container} 	from '../../styled/soyeon/StyledComponent';
import '../../styled/soyeon/_activePage.scss';
import { ParentDiv } from '../../styled/eunsu/StyledComponent';



const ActivePage = () => {

let [datas, set_datas] = useState([]);
let [posts, set_posts] = useState([]);


// 서버에서 이미지 url 불러오기

useEffect(() => {

	const urls = ['board/getBoardImg/2', 'board/getBoardImg/4', 'board/getBoardImg/5', 'board/getBoardImg/9'];
		axios.all(urls.map(url => axios.get(url)))
		.then(responses => {
		const images = responses.map(response => response.data.result);
		set_datas(images);
		console.log(datas);
	})
	    .catch(error => {
		 console.error(error);
	});
	 
},[]);



// 서버에서 동아리 활동내용 불러오기

useEffect(()=> {
	
		const requests = ['board/getBoardOne/동아리활동/1', 'board/getBoardOne/동아리활동/2', 'board/getBoardOne/동아리활동/3', 'board/getBoardOne/동아리활동/4'];
		axios.all(requests.map(request => axios.get(request)))
		.then(responses => {
		const res = responses.map(response => response.data.result);
		set_posts(res);
		console.log(posts);
	})
		.catch(error => {
		console.error(error);
	});
	   
  
 },[]);



	return (
		// 예시 스타일
				
		<ParentDiv>

        
	
		<ul style={{ padding: '78px 0 0 0' }}>

			 {/* 1번째 관광데이터 활용 공모전 */}
			 <div className='main'>
			  <div className='container'>
			  <div className='white_box_wrapper'>
			  <div className='white_box_wrapper:last-of-type'>
 
			  <div className='white_box'>
			  <div className='active_content'>
			  <h2>{posts[1]?.board_content}</h2>
			  <div><img src={datas[2]?.board_img_url}></img></div>
			  <div className='active_body'>
			  <p>진행 날짜: {posts[1]?.board_schedule}</p>
			  <p>주최: {posts[1]?.board_agency}</p>
			  <p>활동 내용: {posts[1]?.board_kind}</p>
			  </div>
			  </div>
 
			  <div className='left_bottom_circle'/>
			  <div className='right_bottom_circle'/>
			  <div className='left_line'/>
			  <div className='right_line'/>
 
			  </div>
			  </div>
			  </div>
		      </div>
	          </div>
					 
			 {/* 2번째 마이핀테크 서비스 경진대회 */}
 
			 <div className='main'>
			 <div className='container'>
			 <div className='white_box_wrapper'>
			 <div className='white_box_wrapper:last-of-type'>
 
			  <div className='white_box'>
			  <div className='active_content'>
			  <h2>{posts[2]?.board_content}</h2>
			  <div><img src={datas[3]?.board_img_url}></img></div>
			  <div className='active_body'>
			  <p>진행 날짜: {posts[2]?.board_schedule}</p>
			  <p>주최: {posts[2]?.board_agency}</p>
			  <p>활동 내용: {posts[2]?.board_kind}</p>
			  </div>
			  </div>

			  <div className='left_top_circle'/>
			  <div className='right_top_circle'/>
			  <div className='left_bottom_circle'/>
			  <div className='right_bottom_circle'/>
			  <div className='left_line'/>
			  <div className='right_line'/>
			  </div>
			  </div>
			  </div>
			  </div>
			  </div>
								 
			  {/* 3번째 소프트웨어콘텐츠과 웹 페이지 제작 */}
			  <div className='main'>
			  <div className='container'>
			  <div className='white_box_wrapper'>
			  <div className='white_box_wrapper:last-of-type'>
 
			  <div className='white_box'>
			  <div className='active_content'>
			  <h2>{posts[0]?.board_content}</h2>
			  <div><img src={datas[0]?.board_img_url}></img></div>
			  <div className='active_body'>
			  <p>진행 날짜: {posts[0]?.board_schedule}</p>
			  <p>주최: {posts[0]?.board_agency}</p>
			  <p>활동 내용: {posts[0]?.board_kind}</p>
			  </div>
			  </div>

			  <div className='left_top_circle'/>
			  <div className='right_top_circle'/>
			  <div className='left_bottom_circle'/>
			  <div className='right_bottom_circle'/>
			  <div className='left_line'/>
			  <div className='right_line'/>
 
			  </div>
			  </div>
		      </div>
			  </div>
			  </div>
 
			  {/* 4번째 메타버스 기반 해커톤 */}
 
			  <div className='main'>
			  <div className='container'>
			  <div className='white_box_wrapper'>
			  <div className='white_box_wrapper:last-of-type'>

			  <div className='white_box'>
			  <div className='active_content'>
			  <h2>{posts[3]?.board_content}</h2>
			  <div><img src={datas[1]?.board_img_url}></img></div>
			  <div className='active_body'>
			  <p>진행 날짜: {posts[3]?.board_schedule}</p>
			  <p>주최: {posts[3]?.board_agency}</p>
			  <p>활동 내용: {posts[3]?.board_kind}</p>
			  </div>
			  </div>

			  <div className='left_top_circle'/>
			  <div className='right_top_circle'/>
			  </div>
			  </div>
			  </div>
			  </div>									
			  </div>
				 
		  </ul> 
		 
		
		</ParentDiv> 

		
     


	);
};

export default ActivePage;