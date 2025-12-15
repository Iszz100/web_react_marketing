import { useEffect, useState } from 'react'
import { productShowcase as fallbackProducts } from './data'

export interface Product {
  slug: string
  name: string
  image: string
  price: string
  description: string
  specs: string[]
  detailedDescription: string
}

interface ProductsResponse {
  items?: Product[]
}

const DATA_URL = '/data/products.json'

function useProducts() {
  const [products, setProducts] = useState<Product[]>(fallbackProducts)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isCancelled = false

    const load = async () => {
      try {
        const response = await fetch(DATA_URL, { cache: 'no-cache' })
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const data = (await response.json()) as ProductsResponse
        const nextItems = Array.isArray(data.items) ? data.items : []

        if (!nextItems.length) {
          throw new Error('Daftar properti kosong')
        }

        if (!isCancelled) {
          setProducts(nextItems)
          setError(null)
        }
      } catch (err) {
        if (!isCancelled) {
          setError('Gagal memuat daftar properti terbaru, menampilkan data bawaan.')
        }
      } finally {
        if (!isCancelled) {
          setLoading(false)
        }
      }
    }

    load()

    return () => {
      isCancelled = true
    }
  }, [])

  return { products, loading, error }
}

export default useProducts
