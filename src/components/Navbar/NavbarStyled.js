import styled from 'styled-components';

export const NavbarContainerStyled = styled.div`
    height: 25vh;
    width: 100%;
    background-color: #18191a;
    display: flex;
    flex-direction: column;
`

export const ContainerCenter = styled.div`
    width: 90%;
    margin: auto;
`

export const LogoUserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
`

export const Logo = styled.img`    
    background-color: blue;
    border: 5px solid darkblue;
    height: 50px;
    width: 50px;
`
export const NameUser = styled.div`
    color: red;
`

export const LinksContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
`
export const LinkContainerStyled = styled.a`
    font-size: 1.2rem;
    color: ${(props) => (props.home ? "#ff9d01" : "#3C18DC")};
`
export const SearchBarContainer = styled.div`
    border: 2px solid black;
`
export const InputSearch = styled.input`

`
export const ButtonSearch = styled.button`

`

// export const UserContainerStyled = styled(LinkContainerStyled)`
//     display: flex;
// `

// export const HomeContainerStyled = styled(LinkContainerStyled)`
//     @media (max-width: 768px){
//         display: none;
//     }
// `
// export const MenuContainerStyled = styled(LinkContainerStyled)`
//     display: none;
//     cursor: pointer;
//     @media (max-width: 768px){
//         display: flex;
//     }
// ` 