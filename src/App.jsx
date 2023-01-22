import React, { useState, useEffect, useRef } from "react"
import { GlobalStyle } from "./styles"
import BooksContainer from "./components/BooksContainer"
import Header from "./components/Header"
import DetailPanel from "./components/DetailPanel"
import Search from "./components/Search"
import Favorites from "./components/Favorites"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const [books, setBooks] = useState([])
  const [showPanel, setShowPanel] = useState(false)
  const [showFaves, setShowFaves] = useState(false)
  const [showOnDesktop, setShowOnDesktop] = useState(false)
  const faveBookIds = JSON.parse(localStorage.getItem("faveBookIds"))

  // Fetch Data Source
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/books.json")
      const books = await response.json()
      setBooks(
        books.map(book => ({
          ...book,
          isFaved: faveBookIds.includes(book.id),
        }))
      )
    }

    // Alternative
    /* const fetchData = () => {
      fetch("/books.json")
        .then(response => response.json())
        .then(books => setBooks(books))
    } */

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Helper function
  const pickBook = bookId => {
    setBooks(books.map(book => ({ ...book, isPicked: book.id === bookId })))
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const filterBooks = searchTerm => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())

    setBooks(
      books.map(book => {
        const isFiltered =
          searchTerm &&
          (stringSearch(book.title, searchTerm) ||
            stringSearch(book.author, searchTerm))
            ? true
            : false
        return { ...book, isFiltered: isFiltered }
      })
    )
  }

  const toggleFave = bookId => {
    setBooks(books => {
      const updatedBooks = books.map(book =>
        book.id === bookId ? { ...book, isFaved: !book.isFaved } : book
      )

      localStorage.setItem(
        "faveBookIds",
        JSON.stringify(
          updatedBooks.filter(({ isFaved }) => isFaved).map(({ id }) => id)
        )
      )
      return updatedBooks
    })
  }

  const toggleShowFaves = () => {
    setShowFaves(!showFaves)
  }

  const hideFaves = () => {
    setShowFaves(false)
  }

  const hasFiltered = books.some(book => book.isFiltered)
  const selectedBook = books.find(book => book.isPicked)

  const displayBooks = hasFiltered
    ? books.filter(book => book.isFiltered)
    : showFaves
    ? books.filter(book => book.isFaved)
    : books

  const title = hasFiltered
    ? "Search results..."
    : showFaves
    ? "Favorites"
    : "All books"

  const inputRef = useRef(null)

  const clearSearch = () => {
    filterBooks("")
    inputRef.current.value = ""
    setShowOnDesktop(false)
  }

  const showSearch = () => {
    setShowOnDesktop(true)
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <Favorites
          showFaves={showFaves}
          toggleShowFaves={toggleShowFaves}
          faveBooksNumber={faveBookIds.length}
          clearSearch={clearSearch}
        />
        <Search
          filterBooks={filterBooks}
          showSearch={showSearch}
          clearSearch={clearSearch}
          showOnDesktop={showOnDesktop}
          inputRef={inputRef}
          hideFaves={hideFaves}
        />
      </Header>
      <BooksContainer
        books={displayBooks}
        pickBook={pickBook}
        selectedBook={selectedBook}
        isPanelOpen={showPanel}
        title={title}
      />
      <AnimatePresence>
        {showPanel && (
          <DetailPanel
            selectedBook={selectedBook}
            toggleFave={toggleFave}
            closePanel={closePanel}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
