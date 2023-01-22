import React from "react"
import styled from "styled-components"
import { SearchIcon, CloseIcon } from "../styles"

const SearchWrapper = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    left: 2rem;
    right: 2rem;
    index: 1;
  }
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  overflow: hidden;
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? "264px" : "1.25rem")};
  height: 3.25rem;
  padding: 0 1rem;
  background-color: var(--color);
  border: 1px solid var(--color-2);
  border-radius: 2.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
  transition: 0.3s ease;
  cursor: ${({ $showOnDesktop }) => ($showOnDesktop ? "auto" : "pointer")};

  ${({ $showOnDesktop }) =>
    !$showOnDesktop
      ? `@media (min-width: 800px) {
        &:hover {
          background-color: var(--color-1);
        }
      }`
      : ""}

  @media (prefers-color-scheme: dark) {
    border-color: var(--color-1);
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  input,
  button {
    display: ${({ $showOnDesktop }) => ($showOnDesktop ? "flex" : "none")};

    @media (max-width: 800px) {
      display: flex;
    }
  }
`
const Input = styled.input`
  flex: 1;
  background: inherit;
  border: none;
  font-family: "Mulish", sans-serif;
  font-size: 1rem;
  color: var(--color-contrary);

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder,
  &::-moz-placeholder {
    color: var(--color-3);
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: inherit;
  border: none;
  cursor: pointer;
`

const SearchComponent = ({
  filterBooks,
  showOnDesktop,
  inputRef,
  clearSearch,
  showSearch,
  hideFaves,
}) => {
  const handleChange = event => {
    filterBooks(event.target.value)
  }

  const handleClick = () => {
    if (!showOnDesktop) {
      showSearch()
      hideFaves()
    }
  }

  const handleKeyUp = event => {
    if (!showOnDesktop && event.key === "Enter") {
      showSearch()
      hideFaves()
    } else if (showOnDesktop && event.key === "Escape") {
      clearSearch()
    }
  }

  return (
    <SearchWrapper>
      <SearchContainer
        $showOnDesktop={showOnDesktop}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        tabIndex="0"
      >
        <SearchIcon />
        <Input
          ref={inputRef}
          type="text"
          name="search"
          placeholder="Search for books..."
          autoComplete="off"
          onChange={handleChange}
        />
        <Button onClick={clearSearch}>
          <CloseIcon />
        </Button>
      </SearchContainer>
    </SearchWrapper>
  )
}

export default SearchComponent
