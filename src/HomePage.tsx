import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { heroContent, productShowcase } from './data'

interface HomePageProps {
  searchQuery: string
}

function HomePage({ searchQuery }: HomePageProps) {
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return productShowcase
    
    const query = searchQuery.toLowerCase().trim()
    return productShowcase.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.specs.some(spec => spec.toLowerCase().includes(query))
    )
  }, [searchQuery])

  return (
    <>
      <section className="hero" id="demo">
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1>{heroContent.title}</h1>
        <p className="lede">{heroContent.subtitle}</p>
        <div className="action-row">
          <a 
            className="btn solid" 
            href={heroContent.primaryCta.href}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector(heroContent.primaryCta.href)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            {heroContent.primaryCta.label}
          </a>
          <a 
            className="btn ghost" 
            href={heroContent.secondaryCta.href}
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector(heroContent.secondaryCta.href)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            {heroContent.secondaryCta.label}
          </a>
        </div>
        <div className="hero-note">
          {heroContent.highlights.map((item) => (
            <span key={item.label}>
              <strong>{item.value}</strong> — {item.label}
            </span>
          ))}
        </div>
      </section>

      <section className="products" id="products">
        <div className="products__header">
          <h2>Properti Pilihan Terbaik</h2>
          {searchQuery && (
            <p style={{ marginTop: '8px', color: 'var(--muted)' }}>
              {filteredProducts.length > 0 
                ? `Ditemukan ${filteredProducts.length} properti untuk "${searchQuery}"`
                : `Tidak ada properti yang cocok dengan "${searchQuery}"`
              }
            </p>
          )}
        </div>
        {filteredProducts.length > 0 ? (
          <div className="products__grid">
            {filteredProducts.map((product) => (
            <Link 
              key={product.slug} 
              to={`/produk/${product.slug}`} 
              className="product-card"
            >
              <div className="product-card__image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-card__body">
                <div className="product-card__header">
                  <h3>{product.name}</h3>
                  <span className="product-card__price">{product.price}</span>
                </div>
                <p>{product.description}</p>
              </div>
            </Link>
          ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '48px 24px',
            color: 'var(--muted)'
          }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '12px' }}>🔍 Properti tidak ditemukan</p>
            <p>Coba kata kunci lain seperti "rumah", "apartemen", "BSD", atau "Sudirman"</p>
          </div>
        )}
      </section>
    </>
  )
}

export default HomePage
