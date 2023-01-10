import React, { useState } from "react"
import styled from "styled-components"
import { Cover, Image, Title, Author } from "./Book.jsx"
import { Icon, Button } from "./Header.jsx"
import { ReactComponent as AddSVG } from "../icons/add.svg"
import { ReactComponent as XSVG } from "../icons/x.svg"
import FocusTrap from "focus-trap-react"
import { motion } from "framer-motion"

const Container = styled.div`
  margin: 0;
  cursor: auto;
`

const Panel = styled(motion.article)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 50rem;
  height: 22.75rem;
  padding: 3rem;
  border-radius: 2.5rem;
  background: var(--color);
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.1);

  @media (prefers-color-scheme: dark) {
    box-shadow: unset;
    border: 1px solid var(--color-1)
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--color-overlay);
  z-index: 1;
  cursor: pointer;
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
  border-radius: 1.75rem;
  font-size: 1rem;
  width: 100%;
  background: var(--color-contrary);
  color: var(--color);

  &:hover {
    background: var(--color-contrary-1);

    @media (prefers-color-scheme: dark) {
      background: var(--color-contrary-2);
    }
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
  gap: 16px;
  height: 100%;
  overflow: scroll;
`

const Wrapper = styled.div`
  display: flex;
  flex: 3;
  position: relative;
  height: 100%;
`

const ScrollGradient = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  background: linear-gradient(to top, var(--color), transparent);
  opacity: ${({ scrollPosition }) => (scrollPosition === 1 ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.5s ease;
`

const TitleLarge = styled(Title)`
  font-size: 1.75rem;
  cursor: auto;
  max-width: 80%;
`

const AuthorLarge = styled(Author)`
  font-size: 1.125rem;
`

const Description = styled.p`
  margin: 0.75rem 0 0;
  color: var(--color-3);
  white-space: pre-wrap;
`

const Published = styled.p`
  font-style: italic;
  font-size: 0.975rem;
  margin: 0.5rem 0 0;
  color: var(--color-3);
`

const DetailPanel = ({ book, closePanel }) => {
  const [scrollPosition, setScrollPosition] = useState(1)

  const handleScroll = event => {
    const pixelScrolled = event.target.scrollTop
    const scrollHeight = event.target.scrollHeight
    const elementHeight = event.target.clientHeight
    const hiddenHeight = scrollHeight - elementHeight
    setScrollPosition((hiddenHeight - pixelScrolled) / hiddenHeight)
  }

  return (
    <FocusTrap>
      <Container>
        <Panel
          key="panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
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
          <Wrapper>
            <About
              onScroll={handleScroll}
              onLoad={handleScroll} /* tabIndex="0" */
            >
              <TitleLarge>{`${book.title}: ${book.subtitle}`}</TitleLarge>
              <AuthorLarge>by {book.author}</AuthorLarge>
              <Description>{book.description}</Description>
              <Published>Published in {book.published}</Published>
            </About>
            <ScrollGradient scrollPosition={scrollPosition} />
          </Wrapper>
          <ButtonClose onClick={closePanel}>
            <CloseIcon />
          </ButtonClose>
        </Panel>
        <Overlay
          onClick={closePanel}
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        />
      </Container>
    </FocusTrap>
  )
}

export default DetailPanel
