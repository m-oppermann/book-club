import React, { useState, useEffect } from "react"
import { GlobalStyle } from "./styles"
import BooksContainer from "./components/BooksContainer"
import Header from "./components/Header"
import DetailPanel from "./components/DetailPanel"
import Search from "./components/Search"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  // Fetch Data Source
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/books.json")
      const data = await response.json()
      setBooks(data)
      setFilteredBooks(data)
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
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const filterBooks = searchTerm => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())
    return !searchTerm
      ? setFilteredBooks(books)
      : setFilteredBooks(
          books.filter(
            book =>
              stringSearch(book.title, searchTerm) ||
              stringSearch(book.author, searchTerm)
          )
        )
  }

  const hasFiltered = filteredBooks.length !== books.length

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        selectedBook={selectedBook}
        isPanelOpen={showPanel}
        hasFiltered={hasFiltered}
      />
      <AnimatePresence>
        {showPanel && (
          <DetailPanel selectedBook={selectedBook} closePanel={closePanel} />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
