import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";
import dummy_data from "./dummy_data"
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { ParentDiv } from '../../styled/yongtae/StyledComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FilterButtons from './FilterButtons';

function Contest() {

  let [datas, set_datas] = useState([]);

    useEffect(() => {
      axios.get('board/getBoardPagination/공모전/1/12')
        .then((response)=> { set_datas(response.data); console.log(response.data) })
    }, []);

    useEffect(() => {
      console.log("성공")
    }, [datas])

  return (

    <ParentDiv>
      <section style={{ display: 'flex', width: '85%', margin: '2rem auto 0', height: 'auto' }}>


        <div> 

          <FilterButtons set_datas={set_datas}/>

          <Container>
            <Row>
              {datas.result && datas.result.map(function (a, i) {
                return (
                  
                  <Col sm={3}>
                    {/* <Link to="/https://happybean.naver.com/rbundle/2011"> */}
                    <img src={process.env.PUBLIC_URL + '/img/dummy_poster' + (i + 1) + '.png'} width="80%" />
                    <h5>{datas.result[i].board_content}</h5>
                    <p>{datas.result[i].board_developmentFields}</p>
                    <p>{datas.result[i].board_end == true ? "진행종료" : "진행중"}</p>
                    {/* </Link> */}
                  </Col>
                  
                )
              }
              )}
            </Row>
          </Container>
          
        </div>
      </section>
    </ParentDiv>
  );
};


export default Contest;