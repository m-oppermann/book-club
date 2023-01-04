import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import BooksContainer from "./components/BooksContainer"
import Header from "./components/Header"

const GlobalStyle = createGlobalStyle`
  :root {
    --light: #f9f9f9;
    --grey-1: #f1f1f1;
    --grey-2: #d9d9d9;
    --grey-3: #737373;
    --dark: #222;
  }

  body {
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.3;
    padding: 0;
    margin: 0;
    background: var(--light);
    color: var(--dark);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/books.json")
      const data = await response.json()
      setBooks(data)
    }

    // Works too
    /* const fetchData = () => {
      fetch("/books.json")
        .then(response => response.json())
        .then(books => setBooks(books))
    } */

    fetchData()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books}></BooksContainer>
    </>
  )
}

export default App
