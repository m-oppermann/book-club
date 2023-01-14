import React from "react"
import styled from "styled-components"
import Book from "./Book"

const Container = styled.div`
  padding: 96px 32px 64px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 1320px;
  overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? "hidden" : "scroll")};
  position: ${({ $isPanelOpen }) => ($isPanelOpen ? "fixed" : "")};
  left: ${({ $isPanelOpen }) => ($isPanelOpen ? "50%" : "")};
  transform: ${({ $isPanelOpen }) => ($isPanelOpen ? "translateX(-50%)" : "")};
`

const H2 = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`

const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  margin-top: 48px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 32px;
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const BooksContainer = ({ books, pickBook, selectedBook, isPanelOpen }) => {
  return (
    <Container $isPanelOpen={isPanelOpen}>
      <H2>All books</H2>
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
    </Container>
  )
}

export default BooksContainer
