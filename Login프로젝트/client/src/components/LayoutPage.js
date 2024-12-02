import React from 'react'
import HeaderPage from './HeaderPage'
import { MainWrapper, Wrapper, Main } from '../styles/layout.styles'
import FooterPage from './FooterPage'
import SidebarPage from './SidebarPage'

//children은 자식 컴포넌트를 의미
const LayoutPage = ({children}) => {
  return (
    <Wrapper>
      <SidebarPage />
      <MainWrapper>
      <HeaderPage />
      <Main>
        {children}
      </Main>
      <FooterPage />
      </MainWrapper>
    </Wrapper>
  )
}

export default LayoutPage