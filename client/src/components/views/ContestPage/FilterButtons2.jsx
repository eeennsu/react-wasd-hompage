import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { ParentDiv } from '../../styled/yongtae/StyledComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../styled/yongtae/_ContestPage.scss';

function FilterButtons(props) {

  console.log(props.page)

  const [page, setPage] = useState(props.page);

  useEffect(() => {
    setPage(props.page);
  }, [props.page]);

  // console.log("props.page")
  let [progress_Click , set_progress_Click] = useState([true, false, false]); 
  // [전체보기, 진행중, 진행종료] 각 버튼의 클릭 상태 여부

  let [category_Click , set_category_Click] = useState([true, false, false, false]); 
  // [웹, 앱, 아이디어] 각 버튼의 클릭 상태 여부

return (
      <div> 
        <div className='div'>
        <button className={'progress_btn' + (progress_Click[0]? " active" : "")} onClick={() => {
        
         let copy = [true, false, false];
         set_progress_Click(copy)
        
          if(category_Click[0] == true)
          {
          axios.get(`board/allPagination/All/${page}/12`)
          .then((response) => {
            console.log(response.data)
            props.set_datas(response.data); })
          }
          else if (category_Click[1] == true)
          {
          axios.get(`board/allPagination/Web/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (category_Click[2] == true)
          {
          axios.get(`board/allPagination/App/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (category_Click[3] == true)
          {
          axios.get(`board/allPagination/Idea/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          }}> 전체보기 </button>

        <button className={'progress_btn' + (progress_Click[1]? " active" : "")} onClick={() => { 
        
          let copy = [false, true, false];
          set_progress_Click(copy)
          
         if(category_Click[0] == true)
         {
         axios.get(`board/ingPagination/All/${props.page}/12`)
         .then((response) => { props.set_datas(response.data); })
         }
         else if (category_Click[1] == true)
         {
         axios.get(`board/ingPagination/Web/${props.page}/12`)
         .then((response) => { props.set_datas(response.data); })
         }
         else if (category_Click[2] == true)
         {
         axios.get(`board/ingPagination/App/${props.page}/12`)
         .then((response) => { props.set_datas(response.data); })
         }
         else if (category_Click[3] == true)
         {
         axios.get(`board/ingPagination/Idea/${props.page}/12`)
         .then((response) => { props.set_datas(response.data); })
         }
          }}> 진행중 </button>

        <button className={'progress_btn' + (progress_Click[2]? " active" : "")} onClick={() => { 
          let copy = [false, false, true];
          set_progress_Click(copy)
          if(category_Click[0] == true)
          {
          axios.get(`board/endPagination/All/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (category_Click[1] == true)
          {
          axios.get(`board/endPagination/Web/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (category_Click[2] == true)
          {
          axios.get(`board/endPagination/App/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (category_Click[3] == true)
          {
          axios.get(`board/endPagination/Idea/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }}}> 진행종료 </button>
         </div>
         <hr className='btn_hr'/>
         

        <div className='div'>
        <button className={'category_btn' + (category_Click[0]? " active" : "")} onClick={() => {
          let copy = [true, false, false, false];
          set_category_Click(copy);
          if(progress_Click[0] == true)
          {
          axios.get(`board/allPagination/All/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (progress_Click[1] == true)
          {
          axios.get(`board/ingPagination/All/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (progress_Click[2] == true)
          {
          axios.get(`board/endPagination/All/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          }}>
          전체
          </button>

        <button className={'category_btn' + (category_Click[1]? " active" : "")} onClick={() => {
          let copy = [false, true, false, false];
          set_category_Click(copy);
          if(progress_Click[0] == true)
          {
          axios.get(`board/allPagination/Web/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (progress_Click[1] == true)
          {
          axios.get(`board/ingPagination/Web/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (progress_Click[2] == true)
          {
          axios.get(`board/endPagination/Web/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          }}>
          웹
        </button>

        <button className={'category_btn' + (category_Click[2]? " active" : "")} onClick={() => {
          let copy = [false, false, true, false];
          set_category_Click(copy);
          if(progress_Click[0] == true)
          {
          axios.get(`board/allPagination/App/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (progress_Click[1] == true)
          {
          axios.get(`board/ingPagination/App/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (progress_Click[2] == true)
          {
          axios.get(`board/endPagination/App/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }}}>
          앱
        </button>

        <button className={'category_btn' + (category_Click[3]? " active" : "")} onClick={() => {
          let copy = [false, false, false, true];
          set_category_Click(copy);
          if(progress_Click[0] == true)
          {
          axios.get(`board/allPagination/Idea/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (progress_Click[1] == true)
          {
          axios.get(`board/ingPagination/Idea/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }
          else if (progress_Click[2] == true)
          {
          axios.get(`board/endPagination/Idea/${props.page}/12`)
          .then((response) => { props.set_datas(response.data); })
          }}}>
          아이디어
        </button>
        <hr className='btn_hr'/>
      </div>
      </div>

);
};


export default FilterButtons;