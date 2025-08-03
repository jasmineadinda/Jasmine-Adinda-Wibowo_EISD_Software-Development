export const revalidate = 60
export const dynamicParams = true

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products')
  
  if (!res.ok) {
    console.error('Failed to fetch product data:', res.status)
    throw new Error('Failed to fetch product data')
  }

  return res.json()
}

export default async function SSGPage() {
  const data = await getData()

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Produk (SSG)</h1>

      <div style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
      }}>
        {data.map((item) => (
          <a
            key={item.id}
            href={`/product/${item.id}`}
            className="card"
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
