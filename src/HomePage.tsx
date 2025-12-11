import { Link } from 'react-router-dom'
import { heroContent, productShowcase } from './data'

function HomePage() {
  return (
    <>
      <section className="hero" id="demo">
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1>{heroContent.title}</h1>
        <p className="lede">{heroContent.subtitle}</p>
        <div className="action-row">
          <a className="btn solid" href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label}
          </a>
          <a className="btn ghost" href={heroContent.secondaryCta.href}>
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
          <h2>Produk yang tersedia untuk paket IndiHome Biz Anda</h2>
        </div>
        <div className="products__grid">
          {productShowcase.map((product) => (
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
      </section>

      <section className="cta" id="pricing">
        <h2>Daftar IndiHome Biz sekarang dan dapatkan internet bisnis yang andal.</h2>
        <div className="action-row">
          <a className="btn solid" href="#demo">
            Daftar sekarang
          </a>
        </div>
      </section>
    </>
  )
}

export default HomePage
