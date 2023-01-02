import React from "react"
import styled from "styled-components"
import Book from "./Book"

const Container = styled.div`
  padding: 64px;
  overflow: scroll;

  @media (max-width: 1200px) {
    padding: 48px;
  }

  @media (max-width: 800px) {
    padding: 32px;
  }
`

const H2 = styled.h2`
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 16px;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`

const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 64px;
  margin-top: 48px;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 48px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
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
