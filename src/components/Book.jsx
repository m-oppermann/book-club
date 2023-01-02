import React from "react"
import styled from "styled-components"

const Container = styled.figure`
  cursor: pointer;
  margin: 0;
`

const Cover = styled.div`
  position: relative;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1.1px 1.5px,
    rgba(0, 0, 0, 0.1) 0px 2.8px 3.9px, rgba(0, 0, 0, 0.08) 0px 5.8px 7.9px,
    rgba(0, 0, 0, 0.06) 0px 12.0455px 16.4px, rgba(0, 0, 0, 0.04) 0px 33px 45px;

  &::after {
    content: "";
    position: absolute;
    inset: 0px;
    border-radius: 2px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.118) 0.65%,
      rgba(255, 255, 255, 0.2) 1.53%,
      rgba(255, 255, 255, 0.1) 2.38%,
      rgba(0, 0, 0, 0.05) 3.26%,
      rgba(255, 255, 255, 0.14) 5.68%,
      rgba(244, 244, 244, 0) 6.96%
    );
  }
`

const Image = styled.img`
  border-radius: 2px;
  aspect-ratio: 2 / 3;
  display: block;
  height: auto;
  object-fit: cover;
  width: 100%;
`

const Description = styled.figcaption`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  margin: 24px 0 8px;
`

const Subtitle = styled.h4`
  color: grey;
  font-size: 16px;
  line-height: 1.3;
  margin: 0 0 12px;
`

const Author = styled.h5`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`

const BookComponent = ({ book }) => (
  <Container>
    <Cover>
      <Image
        src={book.cover}
        alt={`Book cover for ${book.title} by ${book.author}`}
      />
    </Cover>
    <Description>
      <Title>{book.title}</Title>
      {/* <Subtitle>{book.subtitle}</Subtitle> */}
      <Author>by {book.author}</Author>
    </Description>
  </Container>
)

export default BookComponent
