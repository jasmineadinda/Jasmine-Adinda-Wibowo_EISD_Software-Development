import './globals.css'
import Head from 'next/head'

const linkStyle = {
  marginRight: '1rem',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Head>
          <title>Landing Page Produk</title>
          <meta name="description" content="Produk dari Fake Store API" />
        </Head>
      </head>
      <body>
        <div style={{ margin: 0, backgroundColor: '#0a0a0a', color: 'white', fontFamily: 'sans-serif' }}>
          {/* Navbar */}
          <nav style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: '#1f2937',
            borderBottom: '1px solid #333'
          }}>
            <a href="/" style={linkStyle}>Home (CSR)</a>
            <a href="/ssr" style={linkStyle}>SSR</a>
            <a href="/ssg" style={linkStyle}>SSG</a>
          </nav>

          {/* Konten halaman */}
          <main>{children}</main>

          {/* Footer */}
          <footer style={{
            textAlign: 'center',
            padding: '1rem',
            backgroundColor: '#1f2937',
            color: '#aaa',
            marginTop: '3rem'
          }}>
            © 2025 Jasmine Store
          </footer>
        </div>
      </body>
    </html>
  )
}
