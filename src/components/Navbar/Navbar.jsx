import React from 'react'
import { 
    NavbarContainerStyled,
    ContainerCenter,
    Logo,
    LogoUserContainer,
    NameUser,
    LinkContainerStyled,
    LinksContainerStyled,
    SearchBarContainer,
    InputSearch,
    ButtonSearch
} from './NavbarStyled'


export const Navbar = () => {
  return (
    <>
        <NavbarContainerStyled >
            <ContainerCenter>
                <LogoUserContainer>
                    <Logo
                    src="https://www.zarla.com/images/zarla-construye-fcil-1x1-2400x2400-20220117-brrrgkxq7m8m7v3r33gb.png?crop=1:1,smart&width=250&dpr=2" 
                    alt="logo"
                    />
                    <NameUser>
                        Cris user
                    </NameUser>
                </LogoUserContainer>

                <LinksContainerStyled>
                    <LinkContainerStyled>
                        Inicio
                    </LinkContainerStyled>

                    <LinkContainerStyled>
                        Shop
                    </LinkContainerStyled>

                    <LinkContainerStyled>
                        Contacto
                    </LinkContainerStyled>
                </LinksContainerStyled>
                
                <SearchBarContainer>
                    <InputSearch />
                    <ButtonSearch>
                        Buscar
                    </ButtonSearch>
                </SearchBarContainer>
            </ContainerCenter>
        </NavbarContainerStyled>
    </>
  )
}
