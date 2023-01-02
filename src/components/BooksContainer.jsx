import React from "react"
import styled from "styled-components"
import Book from "./Book"

const Container = styled.div`
  background-color: #a7e1f8;
  padding: 160px 48px;
  overflow: scroll;

  @media (max-width: 800px) {
    padding: 112px 24px;
  }
`

const H2 = styled.h2`
  font-size: 40px;
  margin-bottom: 16px;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`

const BookList = styled.div`
  display: grid;
  grid-template-columns: reapeat(4, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 112px;
  margin-top: 48px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: reapeat(3, 1fr);
    grid-row-gap: 48px;
  }

  @media (max-width: 600px) {
    grid-template-columns: reapeat(2, 1fr);
    grid-row-gap: 16px;
  }
`

const BooksContainer = ({ books }) => (
  <Container>
    <H2>All books</H2>
    <BookList>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </BookList>
  </Container>
)

export default BooksContainer
