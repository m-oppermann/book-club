import React /*, { useState, useEffect, useRef } */ from "react"
/* import { debounce } from "lodash-es" */
import styled from "styled-components"
import Book from "./Book"

const Container = styled.div`
  padding: 6rem 0 5rem;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 1352px;

  /* overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? "hidden" : "scroll")};
  position: ${({ $isPanelOpen }) => ($isPanelOpen ? "fixed" : "")};
  top: ${({ $isPanelOpen, $top }) => ($isPanelOpen ? `-${$top}px` : "")};
  left: ${({ $isPanelOpen }) => ($isPanelOpen ? "50%" : "")};
  transform: ${({ $isPanelOpen }) =>
    $isPanelOpen ? "translateX(-50%)" : ""}; */
`

const ListTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`

const Message = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-3)
  }
`

const NoBooksMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin: 3rem 2rem 0;
  border-radius: 3rem;
  background: var(--color-1);
`

const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 3rem;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2.5rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const BooksContainer = ({
  books,
  pickBook,
  selectedBook,
  isPanelOpen,
  title,
}) => {
  /* const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)
    !isPanelOpen && window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isPanelOpen])

  useEffect(() => {
    prevPanelState.current && !isPanelOpen && window.scroll(0, scroll)
    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll]) */

  return (
    <Container /* $isPanelOpen={isPanelOpen} $top={scroll} */>
      <ListTitle>{title}</ListTitle>
      {books.length > 0 ? (
        <BookList>
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              pickBook={pickBook}
              selectedBook={selectedBook}
              isPanelOpen={isPanelOpen}
            />
          ))}
        </BookList>
      ) : (
        <NoBooksMessage>
          <Message>No books selected...</Message>
        </NoBooksMessage>
      )}
    </Container>
  )
}

export default BooksContainer
