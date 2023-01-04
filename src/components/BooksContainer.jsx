import React from "react"
import styled from "styled-components"
import Book from "./Book"

const Container = styled.div`
  max-width: 1320px;
  padding: 96px 32px 64px;
  margin: 0 auto;
  text-align: center;
  overflow: scroll;
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
