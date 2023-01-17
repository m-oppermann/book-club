import React, { useState, useEffect } from "react"
import { GlobalStyle } from "./styles"
import BooksContainer from "./components/BooksContainer"
import Header from "./components/Header"
import DetailPanel from "./components/DetailPanel"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

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
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer
        books={books}
        pickBook={pickBook}
        selectedBook={selectedBook}
        isPanelOpen={showPanel}
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
