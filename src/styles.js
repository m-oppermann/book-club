import styled, { createGlobalStyle, css } from "styled-components"
import { ReactComponent as BookSVG } from "./icons/book.svg"
import { ReactComponent as BookmarkSVG } from "./icons/bookmark.svg"
import { ReactComponent as SearchSVG } from "./icons/search.svg"
import { ReactComponent as AddSVG } from "./icons/add.svg"
import { ReactComponent as XSVG } from "./icons/x.svg"
import { motion } from "framer-motion"

export const GlobalStyle = createGlobalStyle`
  :root {
    --light: #f9f9f9;
    --light-1: #f1f1f1;
    --light-2: #d9d9d9;
    --light-3: #737373;
    --light-overlay: #fafafabf;
    
    --dark: #222222;
    --dark-1: #333333;
    --dark-2: #555555;
    --dark-3: #999999;
    --dark-overlay: #222222bf;

    --color: var(--light);
    --color-1: var(--light-1);
    --color-2: var(--light-2);
    --color-3: var(--light-3);
    --color-overlay: var(--light-overlay);
    --color-contrary: var(--dark);
    --color-contrary-1: var(--dark-1);
    --color-contrary-2: var(--dark-2);
    --color-contrary-3: var(--dark-3);

    @media (prefers-color-scheme: dark) {
      --color: var(--dark);
      --color-1: var(--dark-1);
      --color-2: var(--dark-2);
      --color-3: var(--dark-3);
      --color-overlay: var(--dark-overlay);
      --color-contrary: var(--light);
      --color-contrary-1: var(--light-1);
      --color-contrary-2: var(--light-2);
      --color-contrary-3: var(--light-3);
    }
  }

  body {
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.3;
    padding: 0;
    margin: 0;
    background: var(--color);
    color: var(--color-contrary);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? "hidden" : "scroll")};
  }
`

export const Icon = css`
  stroke: ${({ light }) => (light ? "var(--color)" : "var(--color-contrary)")};
  stroke-width: 2px;
  width: 1.25rem;
  height: 1.25rem;
`

export const BookIcon = styled(BookSVG)`
  ${Icon}
`

export const BookmarkIcon = styled(BookmarkSVG)`
  ${Icon}
`

export const SearchIcon = styled(SearchSVG)`
  ${Icon}
`

export const AddIcon = styled(AddSVG)`
  ${Icon}
`

export const CloseIcon = styled(XSVG)`
  ${Icon}
`

export const IconHolder = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 1rem;
`

export const Logo = styled.a`
  ${IconHolder}
  background-color: var(--color-contrary);
`

export const Button = styled(motion.button)`
  ${IconHolder}
  background-color: var(--color);
  border: 1px solid var(--color-2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--color-1);
  }

  @media (prefers-color-scheme: dark) {
    border-color: var(--color-1);
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`
