import styled from 'styled-components';

export const NavbarContainerStyled = styled.div`
    height: 100px;
    width: 100%;
    background-color: #18191a;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
        background-color: blue;
        border: 5px solid darkblue;
        height: 50px;
        width: 50px;
    }
`

export const LinksContainerStyled = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40;
`
export const LinkContainerStyled = styled.div`
    font-size: 1.2rem;
    color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
    align-items: center;
`

export const UserContainerStyled = styled(LinkContainerStyled)`
    display: flex;
`

export const HomeContainerStyled = styled(LinkContainerStyled)`
    display: flex;
    @media (max-width: 768px){
        display: none;
    }
`
export const MenuContainerStyled = styled(LinkContainerStyled)`
    display: none;
    cursor: pointer;
    @media (max-width: 768px){
        display: flex;
    }
` 