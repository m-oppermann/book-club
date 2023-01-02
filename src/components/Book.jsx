import React from "react"
import styled from "styled-components"

const Container = styled.figure`
  cursor: pointer;
  margin: 0;
`

const Cover = styled.img`
  /* filter: grayscale(100%); */
  border: 2px solid #000;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  margin-bottom: 16px;
`

const Description = styled.figcaption``

const Title = styled.h3`
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 12px;
`

const Author = styled.h4`
  font-size: 16px;
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
