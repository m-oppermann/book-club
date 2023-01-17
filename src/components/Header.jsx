import React from "react"
import styled from "styled-components"
import { BookIcon, BookmarkIcon, Logo, ButtonGroup, Button } from "../styles"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 2rem;
`

const HeaderComponent = ({ children }) => (
  <Header>
    <Logo href="/">
      <BookIcon light title="Book Club logo" />
    </Logo>
    <ButtonGroup>
      <Button>
        <BookmarkIcon title="Bookmark icon" />
      </Button>
      {children}
    </ButtonGroup>
  </Header>
)

export default HeaderComponent
