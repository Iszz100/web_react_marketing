import { useParams, Link, Navigate } from 'react-router-dom'
import { productShowcase } from './data'

function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = productShowcase.find((p) => p.slug === slug)

  if (!product) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <div className="breadcrumb">
        <Link to="/">← Kembali ke Home</Link>
      </div>

      <section className="product-detail">
        <div className="product-detail__hero">
          <div className="product-detail__image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail__intro">
            <h1>{product.name}</h1>
            <div className="product-detail__price">{product.price}</div>
            <p className="product-detail__summary">{product.description}</p>
            
            <div className="product-detail__specs">
              <h3>Spesifikasi Singkat:</h3>
              <ul>
                {product.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="action-row">
              <a className="btn solid" href="tel:+6221-555-0123">
                Hubungi Kami
              </a>
              <a className="btn ghost" href="https://wa.me/6281234567890">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="product-detail__content">
          <div dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
        </div>

        <div className="product-detail__cta">
          <h2>Tertarik dengan {product.name}?</h2>
          <p>Hubungi tim kami untuk survei lokasi gratis dan konsultasi pembelian properti.</p>
          <div className="action-row">
            <a className="btn solid" href="mailto:info@propertyhub.id">
              Email Kami
            </a>
            <Link className="btn ghost" to="/">
              Lihat Properti Lain
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetailPage
