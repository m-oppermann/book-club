import React from "react"
import styled from "styled-components"
import { Cover, Image, Title, Author } from "./Book.jsx"
import { Icon, Button } from "./Header.jsx"
import { ReactComponent as AddSVG } from "../icons/add.svg"
import { ReactComponent as XSVG } from "../icons/x.svg"

const Panel = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 40vw;
  padding: 3.5rem;
  border-radius: 2.5rem;
  background: var(--color);
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.1);
`

const Holder = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1.75rem;
  margin: 0;
  width: 100%;
`

const AddIcon = styled(AddSVG)`
  ${Icon}
`

const CloseIcon = styled(XSVG)`
  ${Icon}
`

const ButtonLarge = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2rem;
  font-size: 1rem;
  width: 100%;
  background-color: var(--color-contrary);
  color: var(--color);

  &:hover {
    background-color: var(--color-contrary-2);
  }
`

const ButtonClose = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`

const About = styled.figcaption`
  display: flex;
  flex-direction: column;
  alight-items: flex-start;
  flex: 3;
  gap: 16px;
`

const TitleLarge = styled(Title)`
  font-size: 1.75rem;
  line-height: 1.2;
  cursor: auto;
  max-width: 90%;
`

const AuthorLarge = styled(Author)`
  font-size: 1.125rem;
`

const Description = styled.p`
  margin: 1rem 0 0 0;
  color: var(--color-3);
`

const Published = styled.p`
  font-style: italic;
  font-size: 0.975rem;
  margin: 0.5rem 0 0;
  color: var(--color-3);
`

const DetailPanel = ({ book }) => (
  <Panel>
    <Holder>
      <Cover>
        <Image
          src={book.cover}
          alt={`Book cover for ${book.title} by ${book.author}`}
        />
      </Cover>
      <ButtonLarge>
        {<AddIcon light title="Add icon" />}
        Add to list
      </ButtonLarge>
    </Holder>
    <About>
      <TitleLarge>{`${book.title}: ${book.subtitle}`}</TitleLarge>
      <AuthorLarge>by {book.author}</AuthorLarge>
      <Description>{book.description}</Description>
      <Published>Published in {book.published}</Published>
    </About>
    <ButtonClose>
      <CloseIcon />
    </ButtonClose>
  </Panel>
)

export default DetailPanel
