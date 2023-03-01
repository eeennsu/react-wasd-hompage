import React from 'react';
import styled from 'styled-components';

export const ParentDiv = styled.section`
    min-height: calc(100vh - 150px);
    padding-top: 11vh;                  // nav의 height 크기만큼 적용하기
    background-color: #9DC78E;        // 크기, 위치 확인용 배경색
    width: 100%;
    /* width: 1852px;                   // 가로 수정 된 넓이
    margin : 0 auto;     */
`;

export const Container = styled.section`
    width: 85%; 
    background: yellowgreen; 
    margin: ${props => props.mt || '2rem'} auto 0 auto; 
    height: auto;
`;