import React from "react"
import styled from "styled-components"

const Container = styled.figure`
  margin: 0;
  cursor: pointer;
`

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  padding: 15%;
  border-radius: 10%;
  background: var(--grey-1);

  &:hover > * {
    transform: translateY(-3%);
  }
`

const Cover = styled.span`
  position: relative;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15), 0px 6px 8px rgba(0, 0, 0, 0.1),
    0px 12px 16px rgba(0, 0, 0, 0.05), 0px 24px 40px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 2px;
    box-shadow: 0px 0px 0px 0.75px rgba(15, 15, 15, 0.05) inset;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1) 0.6%,
      rgba(255, 255, 255, 0.2) 1.5%,
      rgba(255, 255, 255, 0.1) 2.5%,
      rgba(0, 0, 0, 0.05) 3%,
      rgba(255, 255, 255, 0.15) 5.5%,
      rgba(244, 244, 244, 0) 7%
    );
  }
`

const Image = styled.img`
  display: block;
  height: 100%;
  max-width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 2px;
  object-fit: cover;
  object-position: center;
  transform: scale(1.0075);
`

const Description = styled.figcaption`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
  padding: 10%;
  cursor: auto;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
  cursor: pointer;
`

const Author = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: var(--grey-3);
`

const BookComponent = ({ book }) => (
  <Container>
    <Holder>
      <Cover>
        <Image
          src={book.cover}
          alt={`Book cover for ${book.title} by ${book.author}`}
        />
      </Cover>
    </Holder>
    <Description>
      <Title>{book.title}</Title>
      <Author>by {book.author}</Author>
    </Description>
  </Container>
)

export default BookComponent
