import React from 'react';
import styled from 'styled-components';

export const ParantDiv = styled.section`
    min-height: calc(100vh - 190px);
    padding-top: 74px;  
    background-color: #d6cfcf;        // 크기, 위치 확인용 배경색
`;

export const Container = styled.section`
    width: 85%; 
    background: yellowgreen; 
    margin: ${props => props.mt || '2rem'} auto 0 auto; 
    height: auto;
`;