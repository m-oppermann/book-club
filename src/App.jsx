import React, { useState, useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import BooksContainer from "./components/BooksContainer"
import Header from "./components/Header"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Work Sans', sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://book-club-json.herokuapp.com/books")
      const books = await response.json()
      setBooks(books)
    }

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
