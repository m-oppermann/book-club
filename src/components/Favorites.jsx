import React from "react"
import styled from "styled-components"
import { BookmarkIcon, Button } from "../styles"

const FaveButtonContainer = styled.div`
  position: relative;
`

const FaveButton = styled(Button)`
  background-color: ${({ $favesOpen }) => ($favesOpen ? "var(--color-1)" : "")};
`

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5%;
  right: -5%;
  width: 1.125rem;
  height: 1.125rem;
  padding: 0.125rem;
  border-radius: 100%;
  color: var(--color);
  background: var(--color-contrary);
  opacity: ${({ $favesOpen }) => ($favesOpen ? "0" : "100")};
  font-size: 0.875rem;
  pointer-events: none;
  transition: opacity 0.1s ease;
`

const FavoritesComponent = ({
  showFaves,
  toggleShowFaves,
  faveBooksNumber,
  clearSearch,
}) => (
  <FaveButtonContainer>
    <Counter $favesOpen={showFaves}>{faveBooksNumber}</Counter>
    <FaveButton
      onClick={() => {
        toggleShowFaves()
        clearSearch()
      }}
      $favesOpen={showFaves}
    >
      <BookmarkIcon title="Bookmark icon" />
    </FaveButton>
  </FaveButtonContainer>
)

export default FavoritesComponent
