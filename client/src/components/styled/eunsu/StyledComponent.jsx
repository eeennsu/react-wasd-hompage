import styled from 'styled-components';

export const ParentDiv = styled.section`
    min-height: calc(100vh - 150px - 11vh);    // footer의 크기, nav의 크기만큼 빼기
    margin: 0;
    background-color: #9DC78E;        // 크기, 위치 확인용 배경색   
    display: ${({ flex }) => (flex && 'flex')}; 
    justify-content: ${({ justifyCenter }) => (justifyCenter && 'center')};
    align-items: ${({ alignCenter }) => (alignCenter && 'center')};
    width: 100%;
    border-right: 22px solid #fff;
    border-left: 22px solid #fff;
`;

export const Container = styled.section`
    width: 85%; 
    background: yellowgreen; 
    margin: ${props => props.mt || '2rem'} auto 0 auto; 
    height: auto;
`;

export const ErrorMsg = styled.div`
    background-color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 66%;
    padding: 16px;
    border-radius: 22px;
`;