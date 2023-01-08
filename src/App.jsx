import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import BooksContainer from "./components/BooksContainer"
import Header from "./components/Header"
import DetailPanel from "./components/DetailPanel"

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

    --color: var(--light);
    --color-1: var(--light-1);
    --color-2: var(--light-2);
    --color-3: var(--light-3);
    --color-contrary: var(--dark);
    --color-contrary-1: var(--dark-1);
    --color-contrary-2: var(--dark-2);
    --color-contrary-3: var(--dark-3);

    @media (prefers-color-scheme: dark) {
      --color: var(--dark);
      --color-1: var(--dark-1);
      --color-2: var(--dark-2);
      --color-3: var(--dark-3);
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
  }
`

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  // Fetch Data Source
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/books.json")
      const data = await response.json()
      setBooks(data)
    }

    // Alternative
    /* const fetchData = () => {
      fetch("/books.json")
        .then(response => response.json())
        .then(books => setBooks(books))
    } */

    fetchData()
  }, [])

  // Helper function
  const pickBook = book => {
    setSelectedBook(book)
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook}></BooksContainer>
      {selectedBook && <DetailPanel book={selectedBook} />}
    </>
  )
}

export default App
