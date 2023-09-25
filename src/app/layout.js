import './globals.css'
import Nav from './components/organisms/nav/nav'
export const metadata = {
  title: 'SAMSUNG Website',
  description: 'Generated by create next app',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-mx">
      
      <body>
        <Nav/>
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
