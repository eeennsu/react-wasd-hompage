import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { ParentDiv } from '../../styled/yongtae/StyledComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FilterButtons from './FilterButtons';
import styles from '../../styled/yongtae/_ContestPage.scss';
import Pagination from "react-js-pagination";
import '../../styled/yongtae/_Paging.scss';

function Contest() {

  let [datas, set_datas] = useState([]);
  // 렌더링 될 데이터

  let [page, set_page] = useState(1);
  // 현재 페이지

  let handlePageChange = (page) => {
    set_page(page);
  };

  useEffect(() => {
    axios.get(`board/allPagination/All/${page}/12`)
      .then((response) => { set_datas(response.data); })
  }, []); // 초기 렌더링 데이터

  let [max_pagination, set_max_pagination] = useState(datas.length); // 필터링 된 데이터들의 수

  console.log(datas)

  return (

    <ParentDiv >
      <div style={{ width: '66%', margin: '2rem auto 0 auto' }}>

        <FilterButtons set_page={set_page} page={page} set_datas={set_datas} set_max_pagination={set_max_pagination} />

        <Container>
          <Row>
            {datas.result && datas.result.map(function (a, i) {
              return (

                <Col sm={3}>
                  <div className='contest_div' onClick={() => { window.open(`${datas.result[i].board_url}`, '_blank') }}>
                    {/* 공모전 링크 */}

                    <div className='contest_developmentFields_div'>{datas.result[i].board_developmentFields}</div> {/* 공모전 카테고리 */}
                    <img className='datas_sort' src={datas.result[i].board_url_link} width="80%" /> {/*수정예정*/} 

                    <div className='contest_datas_sort'>
                      <div className='contest_content_div'>
                    <p className='contest_content'>{datas.result[i].board_content}</p> {/* 공모전 이름 */}
                    <p className='contest_agency'>{datas.result[i].board_agency}</p> {/* 공모전 주최기관 */}
                    </div>
                    <p className='contest_schedule'>{datas.result[i].board_schedule}</p> {/* 공모전 기간 */}
                    </div>

                  </div>
                </Col>

              )
            }
            )}
          </Row>
        </Container>

        <Pagination
          activePage={page}
          itemsCountPerPage={12} // 한 페이지에 보여질 데이터 수
          totalItemsCount={max_pagination} // 최대 데이터 수, totalItemsCount / itemsCountPerPage = 페이지 수
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange} // page 변경 함수
        />

      </div>
    </ParentDiv>
  );
};


export default Contest;