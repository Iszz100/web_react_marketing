import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'
import ProductDetailPage from './ProductDetailPage'

function App() {
  return (
    <BrowserRouter>
      <div className="shell">
        <header className="masthead">
          <Link to="/" className="logo">IndiHome Biz</Link>
        </header>

        <main className="stack">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produk/:slug" element={<ProductDetailPage />} />
          </Routes>
        </main>

        <footer className="footer">
        <div className="footer__brand">
          <div className="logo">IndiHome Biz</div>
          <p>Layanan internet bisnis dari Telkom Indonesia untuk usaha Anda.</p>
        </div>
        <div className="footer__links">
          <div>
            <p className="footer__title">Menu</p>
            <ul>
              <li>
                <a href="#demo">Home</a>
              </li>
              <li>
                <a href="#products">Produk</a>
              </li>
              <li>
                <a href="#pricing">Daftar</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer__title">Kontak</p>
            <ul>
              <li>
                <a href="mailto:bisnis@indihome.co.id">bisnis@indihome.co.id</a>
              </li>
              <li>
                <a href="tel:147">Telepon 147</a>
              </li>
            </ul>
          </div>
        </div>
        <span className="footer__meta">© {new Date().getFullYear()} PT Telkom Indonesia</span>
      </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
