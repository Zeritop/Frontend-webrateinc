import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    height: 300px;
`;

const Modal = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
    Container,
    Modal
}