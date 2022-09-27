import styled from 'styled-components'

const NavBar = styled.nav`
    width: 100%;
    background-color: #098;
    display: flex;
    justify-content: space-between;
`;

const Brand = styled.div`
    margin-left: 10px;
`;

const Auth = styled.div`
    margin-right: 30px;
`;

export {
    NavBar,
    Brand,
    Auth
}