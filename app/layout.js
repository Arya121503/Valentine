import './globals.css'

export const metadata = {
  title: 'Untuk Kamu ❤️',
  description: 'Pesan khusus untukmu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
