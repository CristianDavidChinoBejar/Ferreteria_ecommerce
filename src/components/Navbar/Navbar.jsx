import React from 'react'
import { HomeContainerStyled, LinksContainerStyled, NavbarContainerStyled } from './NavbarStyled'


export const Navbar = () => {
  return (
    <>
        <NavbarContainerStyled >
            <div>
                <a href="#">
                    <img 
                        src="https://www.zarla.com/images/zarla-construye-fcil-1x1-2400x2400-20220117-brrrgkxq7m8m7v3r33gb.png?crop=1:1,smart&width=250&dpr=2" 
                        alt="logo" 
                    />
                </a>
            </div>
            <LinksContainerStyled>
                <HomeContainerStyled>
                    
                </HomeContainerStyled>
            </LinksContainerStyled>
        </NavbarContainerStyled>
    </>
  )
}
