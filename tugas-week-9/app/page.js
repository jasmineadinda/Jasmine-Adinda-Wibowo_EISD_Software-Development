'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Produk (CSR)</h1>

      <div style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
      }}>
        {products.map((item) => (
          <a
            key={item.id}
            href={`/product/${item.id}`}
            style={{
              display: 'block',
              padding: '1rem',
              borderRadius: '8px',
              backgroundColor: 'white',
              textDecoration: 'none',
              color: 'black',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                height: '150px',
                objectFit: 'contain',
                marginBottom: '0.5rem',
                width: '100%'
              }}
            />
            <h2 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              height: '40px',
              overflow: 'hidden'
            }}>
              {item.title}
            </h2>
            <p style={{ color: 'green', fontWeight: 'bold' }}>${item.price}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
