import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { CloseIcon, AddIcon, Button } from "../styles"
import { BookWrapper, Cover, Image, Title, Author } from "./Book"
import FocusTrap from "focus-trap-react"
import { motion } from "framer-motion"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  margin: 0;
  cursor: auto;
`

const Panel = styled(motion.article)`
  position: fixed;
  z-index: 3;
  height: 100%;
  max-width: 50rem;
  max-height: 22.75rem;
  padding: 3rem;
  border-radius: 2.5rem;
  background: var(--color);
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.1);

  @media (prefers-color-scheme: dark) {
    box-shadow: unset;
    border: 1px solid var(--color-1);
  }

  @media (max-width: 960px) {
    left: 2rem;
    right: 2rem;
  }

  @media (max-width: 840px) {
    max-height: 20rem;
  }

  @media (max-width: 740px) {
    height: auto;
    max-height: 100%;
    padding: 0 3rem;
    inset: 1rem;
  }
`

const Inner = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
  height: 100%;

  @media (max-width: 740px) {
    flex-direction: column;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: var(--color-overlay);
  cursor: pointer;
`

const Holder = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1.75rem;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 740px) {
    width: 50%;
    padding-top: 3rem;
  }

  @media (max-width: 440px) {
    width: 100%;
  }
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

const Wrapper = styled.div`
  display: flex;
  flex: 3;
  position: relative;
  height: 100%;

  @media (max-width: 740px) {
    height: auto;
    padding-bottom: 3rem;
  }
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

  @media (max-width: 740px) {
    display: none;
  }
`

const About = styled(motion.figcaption)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const TitleLarge = styled(Title)`
  font-size: 1.75rem;
  cursor: auto;
  max-width: 80%;

  @media (max-width: 740px) {
    max-width: 100%;
  }

  @media (max-width: 440px) {
    font-size: 1.5rem;
  }
`

const AuthorLarge = styled(Author)`
  font-size: 1.125rem;
`

const Description = styled(motion.p)`
  margin: 0.75rem 0 0;
  color: var(--color-3);
  white-space: pre-wrap;
`

const Published = styled(motion.p)`
  font-style: italic;
  font-size: 0.975rem;
  margin: 0.5rem 0 0;
  color: var(--color-3);
`

const DetailPanel = ({ selectedBook, closePanel, toggleFave }) => {
  const [scrollPosition, setScrollPosition] = useState(1)

  useEffect(() => {
    const handler = event => {
      if (event.key === "Escape") {
        closePanel()
      }
    }
    window.addEventListener("keyup", handler)
    return () => window.removeEventListener("keyup", handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleScroll = event => {
    const pixelScrolled = event.target.scrollTop
    const scrollHeight = event.target.scrollHeight
    const elementHeight = event.target.clientHeight
    const hiddenHeight = scrollHeight - elementHeight
    setScrollPosition((hiddenHeight - pixelScrolled) / hiddenHeight)
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 0.3,
        duration: 0,
      },
    },
    hidden: {
      opacity: 0,
    },
  }

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <FocusTrap>
      <Container>
        <Panel
          key="panel"
          layoutId={`holder-${selectedBook.id}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={list}
        >
          <Inner>
            <Holder>
              <BookWrapper layoutId={`book-${selectedBook.id}`}>
                <Cover>
                  <Image
                    src={selectedBook.cover}
                    alt={`Book cover for ${selectedBook.title} by ${selectedBook.author}`}
                  />
                </Cover>
              </BookWrapper>
              <ButtonLarge
                variants={item}
                onClick={() => {
                  toggleFave(selectedBook.id)
                }}
              >
                {selectedBook.isFaved ? (
                  <>
                    <CloseIcon light title="Remove icon" />
                    Remove book
                  </>
                ) : (
                  <>
                    <AddIcon light title="Add icon" />
                    Add to list
                  </>
                )}
              </ButtonLarge>
            </Holder>
            <Wrapper>
              <About variants={item} onScroll={handleScroll} /* tabIndex="0" */>
                <TitleLarge>{`${selectedBook.title}: ${selectedBook.subtitle}`}</TitleLarge>
                <AuthorLarge>by {selectedBook.author}</AuthorLarge>
                <Description>{selectedBook.description}</Description>
                <Published>Published in {selectedBook.published}</Published>
              </About>
              <ScrollGradient scrollPosition={scrollPosition} variants={item} />
            </Wrapper>
          </Inner>
          <ButtonClose onClick={closePanel} variants={item}>
            <CloseIcon />
          </ButtonClose>
        </Panel>
        <Overlay
          key="overlay"
          onClick={closePanel}
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
