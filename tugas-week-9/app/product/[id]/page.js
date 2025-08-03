export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductDetail({ params }) {
  if (!params || !params.id) {
    return <div>Loading...</div>
  }

  const id = params.id

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return <div>Produk tidak ditemukan</div>
  }

  const product = await res.json()

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>
        {product.title}
      </h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ height: '300px', objectFit: 'contain' }}
        />
        <div>
          <p style={{ marginBottom: '1rem' }}>{product.description}</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'green' }}>
            ${product.price}
          </p>
          <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
            Category: {product.category}
          </p>
        </div>
      </div>
    </div>
  )
}
