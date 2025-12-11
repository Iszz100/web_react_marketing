import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from './HomePage'
import ProductDetailPage from './ProductDetailPage'

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      // Scroll to top when navigating to a page without hash
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false)
  }, [location])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Scroll to products section when search is submitted
    const productsSection = document.querySelector('#products')
    if (productsSection && location.pathname === '/') {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (location.pathname !== '/') {
      // Navigate to home if not on homepage
      window.location.href = '/#products'
    }
  }

  return (
    <div>
      <div className="shell">
          <header className="masthead">
            <Link to="/" className="logo">PropertyHub</Link>
            <button 
              className="hamburger" 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav className={`menu ${menuOpen ? 'is-open' : ''}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/#products" onClick={() => setMenuOpen(false)}>Properti</Link>
              <a href="tel:+6221-555-0123" className="pill-btn">Hubungi Kami</a>
            </nav>
          <form className="search-form" onSubmit={handleSearch}>
            <input 
              type="search" 
              placeholder="Cari properti, lokasi, atau tipe..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </header>

        <main className="stack">
          <Routes>
            <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
            <Route path="/produk/:slug" element={<ProductDetailPage />} />
          </Routes>
        </main>
        </div>

        <footer className="footer">
          <div className="footer__content">
            <div className="footer__brand">
              <div className="logo">PropertyHub</div>
              <p>Platform jual beli dan sewa properti terpercaya di Indonesia.</p>
            </div>
            <div className="footer__links">
              <div>
                <p className="footer__title">Menu</p>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/#products">Properti</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="footer__title">Kontak</p>
                <ul>
                  <li>
                    <a href="mailto:info@propertyhub.id">info@propertyhub.id</a>
                  </li>
                  <li>
                    <a href="tel:+6221-555-0123">+62 21 555 0123</a>
                  </li>
                </ul>
              </div>
            </div>
            <span className="footer__meta">© {new Date().getFullYear()} PropertyHub Indonesia</span>
          </div>
        </footer>
      </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
