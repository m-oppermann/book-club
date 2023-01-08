import React from "react"
import styled, { css } from "styled-components"
import { ReactComponent as BookSVG } from "../icons/book.svg"
import { ReactComponent as BookmarkSVG } from "../icons/bookmark.svg"
import { ReactComponent as SearchSVG } from "../icons/search.svg"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 2rem;
`

const IconHolder = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 1rem;
`

export const Icon = css`
  stroke: ${({ light }) => (light ? "var(--color)" : "var(--color-contrary)")};
  stroke-width: 2px;
  width: 1.25rem;
  height: 1.25rem;
`

const BookIcon = styled(BookSVG)`
  ${Icon}
`

const BookmarkIcon = styled(BookmarkSVG)`
  ${Icon}
`

const SearchIcon = styled(SearchSVG)`
  ${Icon}
`

const Logo = styled.a`
  ${IconHolder}
  background-color: var(--color-contrary);
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Button = styled.button`
  ${IconHolder}
  background-color: var(--color);
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid var(--color-2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);

  &:hover {
    background-color: var(--color-1);
  }
`

const HeaderComponent = () => (
  <Header>
    <Logo href="/">
      <BookIcon light title="Book Club logo" />
    </Logo>
    <ButtonGroup>
      <Button>
        <BookmarkIcon title="Bookmark icon" />
      </Button>
      <Button>
        <SearchIcon title="Search icon" />
      </Button>
    </ButtonGroup>
  </Header>
)

export default HeaderComponent
