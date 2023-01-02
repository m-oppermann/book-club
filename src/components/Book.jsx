import React from "react"
import styled from "styled-components"

const Container = styled.figure`
  cursor: pointer;
  margin: 0;
`

const Cover = styled.img`
  /* filter: grayscale(100%); */
  /* border: 2px solid #000; */
  border-radius: 2px;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
`

const Description = styled.figcaption``

const Title = styled.h3`
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  margin: 24px 0 8px;
`

const Author = styled.h4`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`

const BookComponent = ({ book }) => (
  <Container>
    <Cover
      src={book.image}
      alt={`Book cover for ${book.title} by ${book.author}`}
    />
    <Description>
      <Title>{book.title}</Title>
      <Author>by {book.author}</Author>
    </Description>
  </Container>
)

export default BookComponent
