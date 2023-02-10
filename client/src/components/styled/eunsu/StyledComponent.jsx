import React from 'react';
import styled, { css } from 'styled-components';

export const ParentDiv = styled.section`
    min-height: calc(100vh - 150px);
    padding-top: 11vh;                  // nav의 height 크기만큼 적용하기
    background-color: #9DC78E;        // 크기, 위치 확인용 배경색   
    display: ${({ flex }) => (flex && 'flex')};
    justify-content: ${({ justifyCenter }) => (justifyCenter && 'center')};
    align-items: ${({ alignCenter }) => (alignCenter && 'center')};
`;

export const Container = styled.section`
    width: 85%; 
    background: yellowgreen; 
    margin: ${props => props.mt || '2rem'} auto 0 auto; 
    height: auto;
`;