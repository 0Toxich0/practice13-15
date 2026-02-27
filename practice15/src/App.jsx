import { useState, useEffect } from 'react'
import AddBookForm from './components/AddBookForm'
import BookFilters from './components/BookFilters'
import BookCard from './components/BookCard'

function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('books')
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  const addBook = (bookData) => {
    const newBook = {
      id: Date.now(),
      ...bookData,
      completed: false,
      rating: 0,
      favorite: false
    }
    setBooks([...books, newBook])
  }

  const toggleBook = (id) => {
    setBooks(books.map(book => {
      if (book.id === id) {
        const completed = !book.completed
        return { ...book, completed, rating: completed ? book.rating : 0 }
      }
      return book
    }))
  }

  const rateBook = (id, rating) => {
    setBooks(books.map(book => 
      book.id === id && book.completed ? { ...book, rating } : book
    ))
  }

  const deleteBook = (id) => {
    if (window.confirm('Удалить книгу?')) {
      setBooks(books.filter(book => book.id !== id))
    }
  }

  const toggleFavorite = (id) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, favorite: !book.favorite } : book
    ))
  }

  const filteredBooks = books.filter(book => {
    if (filter === 'unread') return !book.completed
    if (filter === 'read') return book.completed
    return true
  }).filter(book => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return book.title.toLowerCase().includes(query) || 
           book.author.toLowerCase().includes(query)
  })

  const stats = {
    total: books.length,
    completed: books.filter(b => b.completed).length,
    favorites: books.filter(b => b.favorite).length
  }

  return (
    <div className="container py-4">
      <header className="text-center bg-primary text-white p-4 rounded-3 mb-4">
        <h1 className="display-4">Менеджер книг</h1>
        <p className="lead">Управляй своей библиотекой</p>
      </header>

      <main className="bg-white p-4 rounded-3 shadow">
        <AddBookForm onAdd={addBook} />
        
        <BookFilters
          filter={filter}
          onFilterChange={setFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          stats={stats}
        />

        {filteredBooks.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p className="display-1 mb-3">📚</p>
            <h3>Книги не найдены</h3>
            <p>Добавьте первую книгу или измените параметры поиска</p>
          </div>
        ) : (
          <div className="row g-3 mt-2">
            {filteredBooks.map(book => (
              <div key={book.id} className="col-md-6">
                <BookCard
                  book={book}
                  onToggle={toggleBook}
                  onDelete={deleteBook}
                  onRate={rateBook}
                  onFavorite={toggleFavorite}
                />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App