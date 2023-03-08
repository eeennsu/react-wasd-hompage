import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { ParentDiv } from '../../styled/yongtae/StyledComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../styled/yongtae/_ContestPage.scss';

function FilterButtons(props) {


  let [progress_Click, set_progress_Click] = useState([true, false, false]);
  // [전체보기, 진행중, 진행종료] 각 버튼의 클릭 상태 여부

  let [category_Click, set_category_Click] = useState([true, false, false, false]);
  // [전체, 웹, 앱, 아이디어] 각 버튼의 클릭 상태 여부

  let [progress, set_progress] = useState("all");
  // [전체보기, 진행중, 진행종료] 중 어떤 걸 선택했는지

  let [category, set_category] = useState("All");
  // [전체, 웹, 앱, 아이디어] 중 어떤 걸 선택했는지

  let API_URL = `board/${progress}Pagination/${category}/${props.page}/12`;
  // 렌더링될 API URL

  const max_page_cnt = 100;

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        if (!response.data) {
          props.set_datas([]);
        }
        else {
          props.set_datas(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [progress, category, props.page]);
  // 수정 예정

  useEffect(() => {
    axios.get(`board/${progress}Pagination/${category}/1/${max_page_cnt}`)
    .then(response => {
      props.set_max_pagination(response.data.result.length)
    })
  }, [progress, category])
  // 현재 필터링 된 데이터들의 개수를 체크 후 넘겨줘서 필요한 페이지네이션 수 계산

  return (
    <div>
      <div className='div'>

        <button className={'progress_btn' + (progress_Click[0] ? " active" : "")} onClick={() => {

          let copy = [true, false, false];
          set_progress_Click(copy)
          set_progress("all")
          props.set_page(1)

        }}> 전체보기 </button>

        <button className={'progress_btn' + (progress_Click[1] ? " active" : "")} onClick={() => {

          let copy = [false, true, false];
          set_progress_Click(copy)
          set_progress("ing")
          props.set_page(1)

        }}> 진행중 </button>

        <button className={'progress_btn' + (progress_Click[2] ? " active" : "")} onClick={() => {

          let copy = [false, false, true];
          set_progress_Click(copy)
          set_progress("end")
          props.set_page(1)

        }}> 진행종료 </button>

      </div>


      <hr className='btn_hr' />


      <div className='div'>
        <button className={'category_btn' + (category_Click[0] ? " active" : "")} onClick={() => {
          let copy = [true, false, false, false];
          set_category_Click(copy);
          set_category("All")
          props.set_page(1)

        }}> 전체 </button>

        <button className={'category_btn' + (category_Click[1] ? " active" : "")} onClick={() => {
          let copy = [false, true, false, false];
          set_category_Click(copy);
          set_category("Web")
          props.set_page(1)

        }}> 웹 </button>

        <button className={'category_btn' + (category_Click[2] ? " active" : "")} onClick={() => {
          let copy = [false, false, true, false];
          set_category_Click(copy);
          set_category("App")
          props.set_page(1)

        }}> 앱 </button>

        <button className={'category_btn' + (category_Click[3] ? " active" : "")} onClick={() => {
          let copy = [false, false, false, true];
          set_category_Click(copy);
          set_category("Idea")
          props.set_page(1)

        }}> 아이디어 </button>

        <hr className='btn_hr' />

      </div>

    </div>

  );
};


export default FilterButtons;