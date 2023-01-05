import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import BooksContainer from "./components/BooksContainer"
import Header from "./components/Header"

const GlobalStyle = createGlobalStyle`
  :root {
    --light: #f9f9f9;
    --light-1: #f1f1f1;
    --light-2: #d9d9d9;
    --light-3: #737373;
    
    --dark: #222;
    --dark-1: #333;
    --dark-2: #555;
    --dark-3: #999;

    --color: ${({darkMode}) => darkMode ? "var(--dark)" : "var(--light)"};
    --color-1: ${({darkMode}) => darkMode ? "var(--dark-1)" : "var(--light-1)"};
    --color-2: ${({darkMode}) => darkMode ? "var(--dark-2)" : "var(--light-2)"};
    --color-3: ${({darkMode}) => darkMode ? "var(--dark-3)" : "var(--light-3)"};
    --color-contrary: ${({darkMode}) => darkMode ? "var(--light)" : "var(--dark)"};
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
  }
`

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

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

  useEffect(() => {
    const darkModePref = window.matchMedia("(prefers-color-scheme: dark)")

    setDarkMode(darkModePref.matches)

    const handleChange = event => {
      setDarkMode(event.matches)
    }

    darkModePref.addEventListener("change", handleChange)

    return () => {
      darkModePref.removeEventListener("change", handleChange)
    }
  }, [])

  /* console.log(darkMode) */

  const pickBook = book => {
    setSelectedBook(book)
  }

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Header />
      <BooksContainer books={books} pickBook={pickBook}></BooksContainer>
    </>
  )
}

export default App
